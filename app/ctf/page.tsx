import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Flag, Calendar } from "lucide-react";

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

export default function CTF() {
  // Make sure this matches your folder structure (either "src/app/blog" or "app/blog")
  const blogDir = "src/app/blog"; 
  const absolutePath = path.join(process.cwd(), blogDir);
  
  let posts: Post[] = [];

  if (fs.existsSync(absolutePath)) {
    const files = fs.readdirSync(absolutePath);
    posts = files
      .filter(filename => filename.endsWith('.md'))
      .map(filename => {
        const fileContent = fs.readFileSync(path.join(absolutePath, filename), 'utf-8');
        const { data } = matter(fileContent);
        return {
          slug: filename.replace('.md', ''),
          meta: data as Post['meta']
        };
      })
      // This is the magic! It ONLY grabs writeups tagged as "CTF"
      .filter(post => post.meta.platform === "CTF")
      .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 mt-12 min-h-screen">
      <div className="mb-12 border-b border-surface/50 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <Flag className="text-yellow-400" size={32} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            ./CTF_Writeups
          </h1>
        </div>
        <p className="text-text-secondary font-mono text-sm mt-2">
          Capture The Flag competition walkthroughs, reverse engineering, and exploitation logs.
        </p>
      </div>

      <div className="space-y-4">
        {posts.length > 0 ? posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
            <div className="p-4 sm:p-6 bg-surface/30 backdrop-blur-sm border border-surface rounded-xl hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded border text-yellow-400 border-yellow-400/30 bg-yellow-400/10">
                      {post.meta.platform}
                    </span>
                    <span className="text-text-secondary flex items-center gap-1">
                      <Calendar size={12} /> {post.meta.date}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-yellow-400 transition-colors mb-2 line-clamp-2">
                    {post.meta.title}
                  </h2>
                  <p className="text-text-secondary text-sm line-clamp-2 mb-4">
                    {post.meta.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.meta.tags?.map(tag => (
                      <span key={tag} className="text-xs font-mono text-text-secondary bg-background px-2 py-1 rounded border border-surface">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )) : (
          <div className="text-center py-20 text-text-secondary font-mono">
            No CTF logs found. Awaiting data injection...
          </div>
        )}
      </div>
    </div>
  );
}