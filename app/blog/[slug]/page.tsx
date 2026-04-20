import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'app/blog', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-20 mt-12">
      <Link href="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-neon-green transition-colors mb-8 sm:mb-10 font-mono text-sm">
        <ArrowLeft size={16} /> cd ../
      </Link>

      <header className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-surface">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs text-text-secondary mb-4">
          <span className="text-neon-blue">[{data.platform || "Log"}]</span>
          <span className="flex items-center gap-1"><Calendar size={12}/> {data.date}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-text-primary leading-tight">
          {data.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {data.tags?.map((tag: string) => (
            <span key={tag} className="text-xs font-mono text-neon-green bg-neon-green/10 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-invert prose-base sm:prose-lg max-w-none
        prose-headings:text-text-primary prose-headings:font-bold
        prose-p:text-text-secondary prose-p:leading-relaxed
        prose-a:text-neon-blue prose-a:no-underline hover:prose-a:underline
        prose-code:text-neon-green prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm
        prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-surface prose-pre:p-3 sm:prose-pre:p-4 prose-pre:overflow-x-auto
        prose-img:rounded prose-img:border prose-img:border-surface prose-img:max-w-full prose-img:h-auto
        prose-table:text-sm prose-th:text-left prose-th:font-semibold prose-th:border-b prose-th:border-surface prose-th:pb-2
        prose-td:border-b prose-td:border-surface prose-td:pb-2 prose-td:text-text-secondary
        prose-strong:text-text-primary prose-strong:font-semibold">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'app/blog');
  if (!fs.existsSync(blogDir)) return [];
  
  const files = fs.readdirSync(blogDir);
  return files.filter((filename) => filename.endsWith('.md')).map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}
