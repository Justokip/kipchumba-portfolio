import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Terminal } from "lucide-react";
import BlogClient from './BlogClient'; // Importing our new UI component

interface Post {
  slug: string;
  meta: {
    title: string;
    date: string;
    description: string;
    tags?: string[];
    platform?: string;
  };
}

export default function Blog() {
  // Make sure this path matches exactly where your .md files live
  const blogDir = "app/blog"; 
  
  const absolutePath = path.join(process.cwd(), blogDir);

  if (!fs.existsSync(absolutePath)) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 mt-12 text-center text-text-secondary font-mono">
        <Terminal className="mx-auto mb-4 opacity-50" size={48} />
        <p>No writeups found. Awaiting data injection into {blogDir}...</p>
      </div>
    );
  }

  const files = fs.readdirSync(absolutePath);

  const posts: Post[] = files
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const fileContent = fs.readFileSync(path.join(absolutePath, filename), 'utf-8');
      const { data } = matter(fileContent);
      return {
        slug: filename.replace('.md', ''),
        meta: data as Post['meta']
      };
    })
    // Sort from newest to oldest
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

  // Pass the raw data into our interactive client component
  return <BlogClient posts={posts} />;
}