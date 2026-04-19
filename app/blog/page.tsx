import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Terminal, Calendar } from "lucide-react";

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
  const blogDir = "app/blog";
  
  if (!fs.existsSync(path.join(process.cwd(), blogDir))) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 mt-12 text-center text-text-secondary font-mono">
        <Terminal className="mx-auto mb-4 opacity-50" size={48} />
        <p>No writeups found. Awaiting data injection into /app/blog...</p>
      </div>
    );
  }

  const files = fs.readdirSync(path.join(process.cwd(), blogDir));

  const posts: Post[] = files
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const fileContent = fs.readFileSync(path.join(process.cwd(), blogDir, filename), 'utf-8');
      const { data } = matter(fileContent);
      return {
        slug: filename.replace('.md', ''),
        meta: data as Post['meta']
      };
    })
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 mt-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
          <Terminal className="text-neon-green" size={40} />
          <span>./Writeups_&_Logs</span>
        </h1>
        <p className="text-text-secondary font-mono text-sm">
          Detailed walkthroughs for HackTheBox, TryHackMe, and custom security research.
        </p>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
            <div className="p-6 bg-surface border border-surface rounded-xl hover:border-neon-green transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 font-mono text-xs">
                  <span className="text-neon-blue">[{post.meta.platform || "Research"}]</span>
                  <span className="text-text-secondary flex items-center gap-1">
                    <Calendar size={12} /> {post.meta.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-text-primary group-hover:text-neon-green transition-colors mb-2">
                  {post.meta.title}
                </h2>
                <p className="text-text-secondary text-sm line-clamp-2">
                  {post.meta.description}
                </p>
                <div className="flex gap-2 mt-4">
                  {post.meta.tags?.map(tag => (
                    <span key={tag} className="text-xs font-mono text-text-secondary bg-background px-2 py-1 rounded border border-surface">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}