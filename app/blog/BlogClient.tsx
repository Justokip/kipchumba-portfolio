"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Target, FileText, LayoutGrid, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// We define the type based on your markdown structure
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

export default function BlogClient({ posts }: { posts: Post[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { name: "All", icon: <LayoutGrid size={16} /> },
    { name: "Independent Assessment", icon: <Shield size={16} /> },
    { name: "HackTheBox", icon: <Target size={16} /> },
    { name: "TryHackMe", icon: <Terminal size={16} /> },
  ];

  // Filter posts based on the 'platform' specified in your markdown frontmatter
  const filteredPosts = posts.filter(post => {
    if (activeFilter === "All") return true;
    // If a post doesn't have a platform, we can default it to Independent Assessment
    const platform = post.meta.platform || "Independent Assessment";
    return platform === activeFilter;
  });

  const getTypeColor = (platform?: string) => {
    switch(platform) {
      case "HackTheBox": return "text-neon-green border-neon-green/30 bg-neon-green/10";
      case "TryHackMe": return "text-neon-blue border-neon-blue/30 bg-neon-blue/10";
      case "Independent Assessment": return "text-purple-400 border-purple-400/30 bg-purple-400/10";
      default: return "text-text-secondary border-surface bg-surface";
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 mt-12 min-h-screen">
      {/* HEADER SECTION */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <Terminal className="text-neon-green" size={32} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            ./Writeups_&_Logs
          </h1>
        </div>
        <p className="text-text-secondary font-mono text-sm mt-2">
          Detailed walkthroughs for HackTheBox, TryHackMe, and custom security research.
        </p>
      </motion.div>

      {/* DYNAMIC FILTER BAR */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-3 mb-10 pb-6 border-b border-surface/50"
      >
        {filters.map((filter) => (
          <button
            key={filter.name}
            onClick={() => setActiveFilter(filter.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded font-mono text-xs sm:text-sm transition-all duration-300 border ${
              activeFilter === filter.name 
                ? "bg-surface text-text-primary border-text-secondary shadow-[0_0_10px_rgba(255,255,255,0.1)]" 
                : "bg-transparent text-text-secondary border-surface hover:border-text-secondary/50 hover:text-text-primary"
            }`}
          >
            {filter.icon}
            {filter.name === "Independent Assessment" ? "Assessments" : filter.name}
          </button>
        ))}
      </motion.div>

      {/* WRITE-UPS GRID */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={post.slug}
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="p-4 sm:p-6 bg-surface/30 backdrop-blur-sm border border-surface rounded-xl hover:border-neon-green/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex-1 min-w-0">
                      
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 font-mono text-xs">
                        <span className={`px-2 py-0.5 rounded border ${getTypeColor(post.meta.platform)}`}>
                          {post.meta.platform || "Research"}
                        </span>
                        <span className="text-text-secondary flex items-center gap-1">
                          <Calendar size={12} /> {post.meta.date}
                        </span>
                      </div>
                      
                      <h2 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-neon-green transition-colors mb-2 line-clamp-2">
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
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-text-secondary font-mono">
            No logs found for this category.
          </motion.div>
        )}
      </div>
    </div>
  );
}