// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Terminal, Server, ShieldCheck, Award } from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "Offensive Security",
      icon: <Terminal className="text-neon-green" size={20} />,
      items: ["Penetration Testing", "Vulnerability Assessments", "Nmap", "Burp Suite", "Metasploit", "Privilege Escalation"]
    },
    {
      category: "Defensive & IT Infrastructure",
      icon: <Server className="text-neon-blue" size={20} />,
      items: ["Linux Administration", "Active Directory", "Network Protocols (TCP/IP, DNS)", "Firewall Configuration", "Splunk / SIEM"]
    },
    {
      category: "Web & Cloud",
      icon: <ShieldCheck className="text-text-primary" size={20} />,
      items: ["OWASP Top 10", "SQL Injection", "XSS", "Azure Fundamentals", "Python Automation", "Bash Scripting"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 mt-12">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-neon-green">./</span>Whoami
        </h1>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Left Column: The Story */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 space-y-6 text-text-secondary leading-relaxed text-lg"
        >
          <p>
            Hello! I am <span className="text-text-primary font-bold">Kipchumba</span>, a passionate Cybersecurity Analyst and IT Specialist operating out of Nairobi, Kenya.
          </p>
          <p>
            My journey into tech started with a deep curiosity about how networks communicate and how systems are built. That curiosity naturally evolved into figuring out how those same systems can be broken, and more importantly, <span className="text-neon-blue font-medium">how to secure them</span>.
          </p>
          <p>
            Unlike purely offensive security professionals, my strong background in IT infrastructure gives me a unique advantage. I don't just find vulnerabilities; I understand the underlying architecture—whether it's an Active Directory forest, a Linux server, or a cloud deployment—allowing me to provide practical, effective remediation strategies.
          </p>
          <p>
            When I am not auditing systems or managing infrastructure, you can find me tackling boxes on Hack The Box, participating in TryHackMe paths, or optimizing my personal homelab.
          </p>
        </motion.div>

        {/* Right Column: Skills & Certifications */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-1 space-y-8"
        >
          
          {/* Skills Breakdown */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-text-primary border-b border-surface pb-2">Technical Arsenal</h2>
            
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-sm text-text-primary">
                  {skillGroup.icon}
                  {skillGroup.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-surface border border-surface text-text-secondary text-sm rounded hover:border-neon-green/50 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications / Goals */}
          <div className="mt-8 p-6 bg-surface border border-surface rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-neon-green" size={24} />
              <h3 className="text-xl font-bold text-text-primary">Certifications & Training</h3>
            </div>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="text-neon-green">✔</span> CompTIA Security+ (In Progress)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-blue">✔</span> TryHackMe Complete Beginner Path
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-blue">✔</span> Active Hack The Box Member
              </li>
            </ul>
          </div>

        </motion.div>
      </div>

    </div>
  );
}
