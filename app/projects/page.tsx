// src/app/projects/page.tsx
"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, FolderGit2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  // --- PROJECT DATA ---
  // Replace these placeholders with your actual write-ups and experience!
  const projects = [
    {
      title: "Garfield - Active Directory Compromise",
      category: "CTF Writeup",
      platform: "HackTheBox",
      difficulty: "Hard",
      date: "Apr 2026",
      description: "Abused writable ACLs to plant a malicious logon script, performed lateral movement, and forged an RODC Golden Ticket to fully compromise the domain.",
      tech: ["Active Directory", "BloodHound", "Rubeus", "Mimikatz"],
      link: "#"
    },
    {
      title: "DevArea - Apache CXF LFI & RCE",
      category: "CTF Writeup",
      platform: "HackTheBox",
      difficulty: "Medium",
      date: "Mar 2026",
      description: "Exploited CVE-2022-46364 in Apache CXF for LFI, leaked admin credentials, and leveraged a world-writable binary for privilege escalation.",
      tech: ["CVE-2022-46364", "LFI", "PrivEsc", "Docker"],
      link: "#"
    },
    {
      title: "Internal Network Security Audit",
      category: "Pentest Report",
      platform: "Real-World",
      difficulty: "N/A",
      date: "Dec 2025",
      description: "Conducted a comprehensive internal vulnerability assessment. Identified misconfigured SMB shares, applied Active Directory group policies, and patched vulnerable Splunk endpoints.",
      tech: ["Nmap", "Splunk", "Remediation", "Firewalls"],
      link: "#"
    },
    {
      title: "Advent of Cyber 2025",
      category: "Learning Path",
      platform: "TryHackMe",
      difficulty: "Easy",
      date: "Dec 2025",
      description: "Completed the intensive cybersecurity challenge focusing on log analysis, malware reverse engineering, and defensive security postures.",
      tech: ["Wireshark", "Log Analysis", "Burp Suite"],
      link: "#"
    }
  ];

  // Helper function to dynamically color the difficulty badges
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Easy": return "text-neon-green border-neon-green/30 bg-neon-green/10";
      case "Medium": return "text-yellow-400 border-yellow-400/30 bg-yellow-400/10";
      case "Hard": return "text-red-500 border-red-500/30 bg-red-500/10";
      case "Insane": return "text-purple-500 border-purple-500/30 bg-purple-500/10";
      default: return "text-text-secondary border-surface bg-surface";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 mt-12">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 border-b border-surface pb-6"
      >
        <div className="flex items-center gap-3 mb-2">
          <FolderGit2 className="text-neon-green" size={32} />
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
            Projects & Writeups
          </h1>
        </div>
        <p className="text-text-secondary text-lg max-w-2xl mt-4">
          A collection of my technical write-ups, CTF walkthroughs, and infrastructure projects. 
          Focusing on practical exploitation, vulnerability analysis, and secure architecture.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between p-6 bg-surface/40 backdrop-blur-sm border border-surface rounded-xl hover:border-neon-green/50 hover:shadow-[0_0_20px_rgba(0,255,153,0.1)] transition-all duration-300"
          >
            <div>
              {/* Top Meta Tags (Platform & Category) */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2">
                  <span className="px-2 py-1 text-xs font-mono rounded bg-background border border-surface text-neon-blue">
                    {project.platform}
                  </span>
                  <span className="px-2 py-1 text-xs font-mono rounded bg-background border border-surface text-text-secondary">
                    {project.category}
                  </span>
                </div>
                
                {/* Difficulty Badge */}
                {project.difficulty !== "N/A" && (
                  <span className={`px-2 py-1 text-xs font-bold font-mono rounded border ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-neon-green transition-colors">
                {project.title}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Bottom Section: Tech Stack & Link */}
            <div className="mt-auto border-t border-surface/50 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              
              {/* Technical Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tool) => (
                  <span key={tool} className="text-xs text-text-primary/70 flex items-center gap-1">
                    <Terminal size={10} className="text-neon-green" />
                    {tool}
                  </span>
                ))}
              </div>

              {/* Read More Button */}
              <Link 
                href={project.link} 
                className="flex items-center gap-1 text-sm font-mono text-neon-blue hover:text-neon-green transition-colors"
              >
                Read More <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}