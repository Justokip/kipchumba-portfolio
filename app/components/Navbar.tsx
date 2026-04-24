"use client";

import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react"; 
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-surface">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-neon-green font-mono font-bold text-lg md:text-xl hover:text-neon-blue transition-colors">
          <Terminal size={24} />
          <span>root@kipchumba:~#</span>
        </Link>
        
        {/* Desktop Menu (Hidden on mobile) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-text-secondary font-mono items-center">
          <Link href="/about" className="hover:text-neon-green transition-colors">./about</Link>
          <Link href="/projects" className="hover:text-neon-green transition-colors">./projects</Link>
          <Link href="/blog" className="hover:text-neon-green transition-colors">./blog</Link>
          {/* ADDED: CTF Link with yellow hover */}
          <Link href="/ctf" className="hover:text-yellow-400 transition-colors">./ctf</Link>
          <Link href="/contact" className="px-5 py-2 text-sm font-bold bg-neon-blue text-background rounded hover:opacity-90 transition-all">
            Initiate Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle Button (Hidden on desktop) */}
        <button 
          className="md:hidden text-text-primary hover:text-neon-green transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-surface/50 font-mono text-sm px-6 py-4 flex flex-col gap-4">
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-text-secondary hover:text-neon-green">./about</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="block text-text-secondary hover:text-neon-green">./projects</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block text-text-secondary hover:text-neon-green">./blog</Link>
          {/* ADDED: CTF Link for mobile with yellow hover */}
          <Link href="/ctf" onClick={() => setIsOpen(false)} className="block text-text-secondary hover:text-yellow-400">./ctf</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block mt-2 text-center py-3 font-bold bg-neon-blue text-background rounded">
            Initiate Contact
          </Link>
        </div>
      )}
    </nav>
  );
}