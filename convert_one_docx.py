#!/usr/bin/env python3
"""
Convert a single docx file to markdown with proper image extraction
Usage: python3 convert_one_docx.py <docx_file_path> <output_md_name> <media_folder_name>
"""
import os
import sys
import subprocess
import shutil
from pathlib import Path

def convert_single_docx(docx_path, output_md_name, media_folder_name):
    """Convert a single docx file and extract its images"""
    
    # Verify input file exists
    if not os.path.exists(docx_path):
        print(f"ERROR: Input file does not exist: {docx_path}")
        return False
    
    # Setup paths
    blog_dir = Path("/home/crypt0/Desktop/kipchumba-portfolio/app/blog")
    public_dir = Path("/home/crypt0/Desktop/kipchumba-portfolio/public")
    media_dir = public_dir / "media-original" / media_folder_name
    output_md_path = blog_dir / output_md_name
    temp_md_path = Path("/tmp") / f"{media_folder_name}.md"
    
    # Create directories
    media_dir.mkdir(parents=True, exist_ok=True)
    blog_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"Converting: {os.path.basename(docx_path)}")
    print(f"  Output MD: {output_md_path}")
    print(f"  Media dir: {media_dir}")
    
    # Step 1: Use pandoc to convert docx to markdown and extract media
    try:
        result = subprocess.run([
            'pandoc',
            docx_path,
            '-f', 'docx',
            '-t', 'markdown',
            '--extract-media', str(media_dir),
            '-o', str(temp_md_path)
        ], capture_output=True, text=True, timeout=60)
        
        if result.returncode != 0:
            print(f"ERROR: pandoc failed: {result.stderr}")
            return False
        
        print(f"  ✓ Pandoc conversion successful")
        
    except Exception as e:
        print(f"ERROR: Exception during pandoc: {e}")
        return False
    
    # Step 2: Read the markdown and clean it
    try:
        with open(temp_md_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        
        # Count images
        import re
        image_count = len(re.findall(r'!\[.*?\]\(.*?\)', md_content))
        print(f"  ✓ Found {image_count} images in content")
        
    except Exception as e:
        print(f"ERROR: Could not read markdown: {e}")
        return False
    
    # Step 3: Verify images were extracted
    try:
        # Pandoc extracts to media/ subdirectory
        media_subdir = media_dir / "media"
        if media_subdir.exists():
            extracted_images = list(media_subdir.glob("*"))
            print(f"  ✓ Extracted {len(extracted_images)} image files to {media_subdir.name}/")
            
            # Move images up one level (from media-original/folder/media/ to media-original/folder/)
            for img in extracted_images:
                dest = media_dir / img.name
                shutil.move(str(img), str(dest))
                print(f"    Moved: {img.name}")
            
            # Remove empty media folder
            try:
                media_subdir.rmdir()
            except:
                pass
        else:
            print(f"  ⚠ No media subfolder found (no images in docx?)")
    
    except Exception as e:
        print(f"WARNING: Could not process extracted images: {e}")
    
    # Step 4: Clean and fix markdown
    try:
        with open(temp_md_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        
        import re
        
        # Fix image paths: absolute to relative
        # Replace absolute paths with /media-original/folder/imageN.png
        md_content = re.sub(
            r'!\[\]\(/home/crypt0/Desktop/kipchumba-portfolio/public/media-original/[^/]+/(?:media/)?image(\d+)\.png\)',
            rf'![](/kipchumba-portfolio/media-original/{media_folder_name}/image\1.png)',
            md_content
        )
        
        # Remove ALL width/height attributes - be aggressive
        # Handle: {width="..." height="..."} with various line breaks
        md_content = re.sub(
            r'\{width="[^"]*"[^\}]*height="[^"]*"\}',
            '',
            md_content,
            flags=re.DOTALL
        )
        
        # Remove remaining standalone width/height attributes
        md_content = re.sub(r'\{width="[^"]*"\}', '', md_content)
        md_content = re.sub(r'\{height="[^"]*"\}', '', md_content)
        
        # Remove {.mark} and other pandoc attributes
        md_content = re.sub(r'\{[^}]+\}', '', md_content)
        
        # Fix bracketed marked text: [text]{.mark} or just [text] on standalone lines
        # For inline: [text]{.anything} -> text
        md_content = re.sub(r'\[([^\]]+)\]\{[^}]*\}', r'\1', md_content)
        
        # For block-level marked text in lists: numbered/bullet lists starting with [
        # Removes outer brackets: [text text...] -> text text...
        md_content = re.sub(r'^(\d+\.\s+)\[([^\]]+)\]$', r'\1\2', md_content, flags=re.MULTILINE)
        md_content = re.sub(r'^(-\s+)\[([^\]]+)\]$', r'\1\2', md_content, flags=re.MULTILINE)
        
        # For blockquote marked text: >  [**Answer:** ...] -> > **Answer:** ...
        md_content = re.sub(r'>\s*\[([^\]]*)\]', r'> \1', md_content)
        
        # Standalone lines with only brackets: [text] -> text
        md_content = re.sub(r'^\[([^\]]+)\]$', r'\1', md_content, flags=re.MULTILINE)
        
        # Save cleaned markdown to blog folder
        with open(output_md_path, 'w', encoding='utf-8') as f:
            f.write(md_content)
        
        print(f"  ✓ Markdown cleaned and saved")
        
        # Clean up temp file
        os.remove(temp_md_path)
        
    except Exception as e:
        print(f"ERROR: Could not save markdown: {e}")
        return False
    
    print(f"✅ Successfully converted {os.path.basename(docx_path)}\n")
    return True

if __name__ == '__main__':
    if len(sys.argv) != 4:
        print("Usage: python3 convert_one_docx.py <docx_path> <output_md_name> <media_folder>")
        print("Example: python3 convert_one_docx.py '/path/to/file.docx' 'File-Name.md' 'folder-name'")
        sys.exit(1)
    
    docx_path = sys.argv[1]
    output_md_name = sys.argv[2]
    media_folder = sys.argv[3]
    
    success = convert_single_docx(docx_path, output_md_name, media_folder)
    sys.exit(0 if success else 1)
