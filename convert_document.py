#!/usr/bin/env python3
"""
Universal document converter for .docx and .pdf files to markdown with image extraction
Supports: .docx, .pdf
"""

import os
import subprocess
import shutil
import re
import sys
from pathlib import Path

def convert_single_document(docx_path, output_filename, media_folder_name):
    """
    Convert a .docx or .pdf document to markdown with image extraction.
    
    Args:
        docx_path: Full path to the .docx or .pdf file
        output_filename: Name for the output markdown file (e.g., "Sweettooth-Inc_.md")
        media_folder_name: Folder name for images (e.g., "sweettooth")
    """
    
    # Get file extension
    file_ext = Path(docx_path).suffix.lower()
    if file_ext not in ['.docx', '.pdf']:
        print(f"ERROR: Unsupported format: {file_ext}")
        print("Supported formats: .docx, .pdf")
        return False
    
    input_filename = Path(docx_path).name
    print(f"Converting: {input_filename}")
    
    # Paths
    project_root = Path(__file__).parent
    blog_dir = project_root / "app" / "blog"
    public_dir = project_root / "public"
    media_base_dir = public_dir / "media-original"
    media_dir = media_base_dir / media_folder_name
    output_md_path = blog_dir / output_filename
    temp_work_dir = project_root / ".convert_temp"
    
    print(f"  Output MD: {output_md_path}")
    print(f"  Media dir: {media_dir}")
    
    # Create directories
    media_dir.mkdir(parents=True, exist_ok=True)
    temp_work_dir.mkdir(parents=True, exist_ok=True)
    temp_md_path = temp_work_dir / "temp.md"
    
    # Step 1: Convert document to markdown with image extraction
    try:
        if file_ext == '.pdf':
            # For PDF: extract text and images separately
            print(f"  ℹ PDF detected - using pdftotext + pdfimages")
            
            # Extract text with layout preserved
            pdf_text_path = temp_work_dir / "temp.txt"
            text_cmd = ["pdftotext", "-layout", str(docx_path), str(pdf_text_path)]
            result = subprocess.run(text_cmd, capture_output=True, text=True, timeout=60)
            
            if result.returncode != 0:
                print(f"ERROR: pdftotext extraction failed")
                print(f"  stderr: {result.stderr}")
                return False
            
            # Extract images from PDF
            images_dir = temp_work_dir / "media"
            images_dir.mkdir(exist_ok=True)
            
            img_cmd = ["pdfimages", "-png", str(docx_path), str(images_dir / "image")]
            result = subprocess.run(img_cmd, capture_output=True, text=True, timeout=60)
            # pdfimages returns non-zero if no images found, which is okay
            
            # Convert extracted text to markdown
            with open(pdf_text_path, 'r', encoding='utf-8', errors='ignore') as f:
                text_content = f.read()
            
            # Simple markdown formatting for PDF text
            md_content = f"# {Path(docx_path).stem}\n\n{text_content}\n"
            
            with open(temp_md_path, 'w', encoding='utf-8') as f:
                f.write(md_content)
            
            print(f"  ✓ PDF text extraction successful")
            
        else:
            # For DOCX: use pandoc
            cmd = [
                "pandoc",
                str(docx_path),
                "-t", "markdown",
                "--extract-media", str(temp_work_dir),
                "-o", str(temp_md_path)
            ]
            
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
            
            if result.returncode != 0:
                print(f"ERROR: Pandoc conversion failed")
                print(f"  stderr: {result.stderr}")
                return False
            
            print(f"  ✓ Pandoc conversion successful")
        
    except subprocess.TimeoutExpired:
        print(f"ERROR: Pandoc conversion timed out")
        return False
    except Exception as e:
        print(f"ERROR: Could not run pandoc: {e}")
        return False
    
    # Step 2: Find and move images
    try:
        # Pandoc may extract to media/ or media folder
        media_extract_paths = [
            temp_work_dir / "media",
        ]
        
        image_count = 0
        images_found = []
        
        for extract_path in media_extract_paths:
            if extract_path.exists():
                for img_file in extract_path.glob("*"):
                    if img_file.is_file():
                        images_found.append(img_file)
        
        image_count = len(images_found)
        
        # Check markdown for image references to get more accurate count
        with open(temp_md_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        
        # Count image references in markdown
        md_image_count = len(re.findall(r'!\[\]', md_content))
        
        print(f"  ✓ Found {md_image_count} images in content")
        print(f"  ✓ Extracted {image_count} image files to media/")
        
        # Move images to target directory
        for img_file in images_found:
            try:
                dest_path = media_dir / img_file.name
                shutil.copy2(img_file, dest_path)
                print(f"    Moved: {img_file.name}")
            except Exception as e:
                print(f"    ERROR moving {img_file.name}: {e}")
        
    except Exception as e:
        print(f"ERROR: Could not process images: {e}")
        return False
    
    # Step 3: Fix markdown image paths and add image references for PDFs
    try:
        with open(temp_md_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        
        # Convert absolute paths to relative paths
        # For both /home/... and relative path references
        md_content = re.sub(
            r'!\[\]\(/home/crypt0/Desktop/kipchumba-portfolio/public/media-original/[^/]+/(?:media/)?([^/]+\.png)\)',
            rf'![](/kipchumba-portfolio/media-original/{media_folder_name}/\1)',
            md_content
        )
        
        # Also handle relative references (media/image.png)
        md_content = re.sub(
            r'!\[\]\(media/([^)]+\.png)\)',
            rf'![](/kipchumba-portfolio/media-original/{media_folder_name}/\1)',
            md_content
        )
        
        # For PDFs: if no images found in markdown but images extracted, add them
        if file_ext == '.pdf' and '![' not in md_content:
            # Find all extracted images
            extracted_images = sorted([f.name for f in (temp_work_dir / "media").glob("*.png") if (temp_work_dir / "media" / f.name).exists()])
            
            if extracted_images:
                # Add images section at the end
                md_content += "\n\n## Extracted Images\n\n"
                for img in extracted_images:
                    md_content += f"![](/kipchumba-portfolio/media-original/{media_folder_name}/{img})\n\n"
        
        # Save temporarily to check paths work
        with open(temp_md_path, 'w', encoding='utf-8') as f:
            f.write(md_content)
            
    except Exception as e:
        print(f"ERROR: Could not fix image paths: {e}")
        return False
    
    # Step 4: Clean and fix markdown
    try:
        with open(temp_md_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        
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
    
    # Clean up temp directory
    try:
        shutil.rmtree(temp_work_dir)
    except Exception as e:
        print(f"WARNING: Could not clean temp directory: {e}")
    
    print(f"✅ Successfully converted {input_filename}")
    return True


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python3 convert_document.py <input_file> <output_filename> <media_folder>")
        print("\nSupported formats:")
        print("  - .docx (Microsoft Word)")
        print("  - .pdf (PDF documents)")
        print("\nExample:")
        print("  python3 convert_document.py './document.docx' 'output.md' 'myfolder'")
        print("  python3 convert_document.py './notes.pdf' 'notes.md' 'notes'")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_filename = sys.argv[2]
    media_folder = sys.argv[3]
    
    if not os.path.exists(input_file):
        print(f"ERROR: File not found: {input_file}")
        sys.exit(1)
    
    success = convert_single_document(input_file, output_filename, media_folder)
    sys.exit(0 if success else 1)
