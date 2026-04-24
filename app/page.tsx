"use client";

import { motion } from "framer-motion";
import { Shield, Server, Lock, ArrowRight, Mail, Terminal, Flag } from "lucide-react"; 
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "System Active // Available for Work";

  useEffect(() => {
    let currentText = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        currentText += fullText.charAt(i);
        setTypedText(currentText);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 flex items-center min-h-[85vh] relative py-12 md:py-0">
      
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <section className="flex w-full flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6 w-full"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/50 border border-neon-green/30 text-neon-green text-xs font-mono rounded-full backdrop-blur-sm shadow-[0_0_10px_rgba(0,255,153,0.1)]">
            <Terminal size={14} />
            <span>{typedText}<span className="animate-pulse">_</span></span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary">
            Securing networks. <br />
            <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,153,255,0.3)]">
              Building infrastructure.
            </span>
          </h1>
          
          <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
            I am <span className="text-text-primary font-bold">Justus Kipchumba</span>, a Cybersecurity Analyst & IT Specialist. I specialize in penetration testing, network administration, and secure system architecture. 
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/projects" className="px-6 py-3 bg-neon-green text-background font-bold rounded flex items-center gap-2 hover:bg-neon-green/90 hover:shadow-[0_0_15px_rgba(0,255,153,0.4)] transition-all">
              View My Work <ArrowRight size={18} />
            </Link>
            
            <a href="/kipchumba-cv.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-text-secondary hover:border-neon-green text-text-primary font-bold rounded hover:shadow-[0_0_15px_rgba(0,255,153,0.2)] transition-all">
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-6 pt-6 text-text-secondary">
            <Link href="https://github.com/Justokip" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-all duration-300"><Terminal size={24} /></Link> 
            <Link href="https://www.linkedin.com/in/justus-kipchumba/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
            <Link href="/contact" className="hover:text-neon-green transition-all duration-300"><Mail size={24} /></Link>
          </div>
        </motion.div>

        {/* Right Column: 2x2 Interactive Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex justify-center w-full relative mt-8 md:mt-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md md:max-w-none mx-auto">
             
             {/* 1. Pen Testing */}
             <Link href="/projects" className="p-4 sm:p-8 bg-surface/80 backdrop-blur border border-surface rounded-xl flex flex-col items-center gap-3 hover:border-neon-green hover:shadow-[0_0_20px_rgba(0,255,153,0.2)] hover:-translate-y-1 transition-all duration-300 group">
                <Shield size={40} className="text-neon-green group-hover:drop-shadow-[0_0_8px_rgba(0,255,153,0.8)] transition-all" />
                <span className="font-mono text-xs sm:text-sm text-center text-text-secondary group-hover:text-text-primary transition-colors">Pen Testing</span>
             </Link>
             
             {/* 2. Infrastructure */}
             <Link href="/projects" className="p-4 sm:p-8 bg-surface/80 backdrop-blur border border-surface rounded-xl flex flex-col items-center gap-3 hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,153,255,0.2)] hover:-translate-y-1 transition-all duration-300 group">
                <Server size={40} className="text-neon-blue group-hover:drop-shadow-[0_0_8px_rgba(0,153,255,0.8)] transition-all" />
                <span className="font-mono text-xs sm:text-sm text-center text-text-secondary group-hover:text-text-primary transition-colors">Infrastructure</span>
             </Link>
             
             {/* 3. System Admin */}
             <Link href="/about" className="p-4 sm:p-8 bg-surface/80 backdrop-blur border border-surface rounded-xl flex flex-col items-center gap-3 hover:border-neon-green hover:shadow-[0_0_20px_rgba(0,255,153,0.2)] hover:-translate-y-1 transition-all duration-300 group">
                <Lock size={40} className="text-neon-green group-hover:drop-shadow-[0_0_8px_rgba(0,255,153,0.8)] transition-all" />
                <span className="font-mono text-xs sm:text-sm text-center text-text-secondary group-hover:text-text-primary transition-colors">System Admin</span>
             </Link>

             {/* 4. CTFs (UPDATED PATH) */}
             <Link href="/ctf" className="p-4 sm:p-8 bg-surface/80 backdrop-blur border border-surface rounded-xl flex flex-col items-center gap-3 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:-translate-y-1 transition-all duration-300 group">
                <Flag size={40} className="text-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] transition-all" />
                <span className="font-mono text-xs sm:text-sm text-center text-text-secondary group-hover:text-text-primary transition-colors">CTF Writeups</span>
             </Link>

          </div>
        </motion.div>
      </section>

    </div>
  );
}