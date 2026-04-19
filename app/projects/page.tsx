// src/app/projects/page.tsx
"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, ShieldAlert, Network } from "lucide-react"; // Removed Github from here!
import Link from "next/link";

// 📝 Mock Data: We store projects in an array so it's easy for you to add more later!
const projects = [
  {
    id: 1,
    title: "Enterprise Active Directory Homelab",
    description: "Built a fully functional Windows Active Directory environment using Proxmox. Configured Domain Controllers, simulated attacks (Kerberoasting, DCSync), and implemented defensive monitoring with Splunk.",
    tags: ["System Admin", "Active Directory", "Splunk", "Proxmox"],
    icon: <Network className="text-neon-blue" size={24} />,
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Automated Web Vulnerability Scanner",
    description: "Developed a Python-based automation script that chains together Nmap, ffuf, and Nikto to perform initial reconnaissance and identify low-hanging vulnerabilities on web targets.",
    tags: ["Python", "Pen Testing", "Automation", "Bash"],
    icon: <ShieldAlert className="text-neon-green" size={24} />,
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "TryHackMe / HTB Writeups Repository",
    description: "A comprehensive collection of my methodologies and walkthroughs for advanced penetration testing machines, focusing on privilege escalation and reverse engineering.",
    tags: ["Documentation", "Linux", "PrivEsc", "CTF"],
    icon: <FolderGit2 className="text-text-primary" size={24} />,
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 mt-12">
      
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-neon-green">./</span>My_Work
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          A showcase of my homelabs, security scripts, and IT infrastructure projects. Proving theoretical knowledge through hands-on execution.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface border border-surface hover:border-neon-green/50 transition-colors rounded-xl p-6 flex flex-col h-full"
          >
            {/* Card Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-background rounded-lg">
                {project.icon}
              </div>
              <div className="flex items-center gap-4 text-text-secondary">
                {/* Custom SVG for GitHub (scaled to 20x20) */}
                <Link href={project.github} className="hover:text-neon-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.6a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </Link>
                <Link href={project.live} className="hover:text-neon-blue transition-colors">
                  <ExternalLink size={20} />
                </Link>
              </div>
            </div>

            {/* Card Body */}
            <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-neon-green transition-colors">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm flex-grow mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Card Footer (Tags) */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-background text-text-secondary text-xs font-mono rounded border border-surface">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}