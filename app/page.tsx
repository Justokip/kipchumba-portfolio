"use client";

import { motion } from "framer-motion";
import { Shield, Server, Lock, ArrowRight, Mail } from "lucide-react"; 
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6"
        >
          <div className="inline-block px-3 py-1 bg-surface border border-neon-green/30 text-neon-green text-xs font-mono rounded-full">
            System Active // Available for Work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Securing networks. <br />
            <span className="text-neon-blue">
              Building infrastructure.
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl">
            I am Justus Kipchumba, a Cybersecurity Analyst & IT Specialist based in Nairobi. I 
            specialize in penetration testing, network administration, and secure system architecture. 
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/projects" className="px-6 py-3 bg-neon-green text-background font-bold rounded flex items-center gap-2 hover:opacity-90 transition-all">
              View My Work <ArrowRight size={18} />
            </Link>
            <Link href="/cv.pdf" target="_blank" className="px-6 py-3 border border-text-secondary hover:border-neon-green text-text-primary font-bold rounded transition-all">
              Download CV
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-6 text-text-secondary">
            <Link href="https://github.com/Justokip" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.6a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </Link> 
            <Link href="https://www.linkedin.com/in/justus-kipchumba/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
            <Link href="/contact" className="hover:text-neon-green transition-colors">
              <Mail size={24} />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 hidden md:flex justify-center relative"
        >
          <div className="relative z-10 grid grid-cols-2 gap-4">
             <div className="p-6 bg-surface border border-surface rounded-xl flex flex-col items-center gap-3 hover:border-neon-green transition-colors cursor-pointer">
                <Shield size={40} className="text-neon-green" />
                <span className="font-mono text-sm">Pen Testing</span>
             </div>
             <div className="p-6 bg-surface border border-surface rounded-xl flex flex-col items-center gap-3 hover:border-neon-blue transition-colors mt-8 cursor-pointer">
                <Server size={40} className="text-neon-blue" />
                <span className="font-mono text-sm">Infrastructure</span>
             </div>
             <div className="p-6 bg-surface border border-surface rounded-xl flex flex-col items-center gap-3 hover:border-neon-green transition-colors col-span-2 cursor-pointer">
                <Lock size={40} className="text-neon-green" />
                <span className="font-mono text-sm">System Admin</span>
             </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}