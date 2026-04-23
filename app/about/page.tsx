// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Terminal, Server, ShieldCheck, Award, Briefcase, Trophy, GraduationCap } from "lucide-react";

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

  const experience = [
    {
      role: "Front Office & Operations Assistant",
      company: "Embassa Guest House & Hotel",
      duration: "Jun 2025 - Dec 2025",
      description: "Maintained accurate financial records, managed cash flow, handled procurement, and organized staff records to improve operational accountability.",
      tech: ["Operations", "Finance", "Management"]
    },
    {
      role: "Cybersecurity Analyst (Virtual Experience)",
      company: "Mastercard (via Forage)",
      duration: "Jul 2025",
      description: "Served on the Security Awareness Team to identify phishing threats, analyze business security vulnerabilities, and implement targeted training procedures.",
      tech: ["Phishing Analysis", "Security Awareness", "Risk Assessment"]
    },
    {
      role: "Security Analyst (Trainee)",
      company: "CyberShujaa",
      duration: "Sep 2024 - Dec 2024",
      description: "Conducted simulated penetration tests, practiced privilege escalation, and performed threat-hunting by analyzing network logs and traffic for suspicious activities.",
      tech: ["Nmap", "Wireshark", "Metasploit", "Penetration Testing"]
    },
    {
      role: "Enumerator (Contract)",
      company: "Ministry of Labour and Social Protection",
      duration: "Oct 2024 - Nov 2024",
      description: "Collected critical data for social protection programs, leveraging local language skills to build trust and ensure accurate data entry under strict deadlines.",
      tech: ["Data Collection", "Reporting", "Fieldwork"]
    },
    {
      role: "ICT Intern - Business Applications",
      company: "Agile Business Solutions Limited",
      duration: "Sep 2023 - Dec 2023",
      description: "Developed and customized extensions for Microsoft Dynamics 365 Business Central, customized UI, and created reports using AL, RDLC, and Word layouts.",
      tech: ["Dynamics 365", "AL", "RDLC", "VS Code"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Umma University – Nairobi, Kenya",
      duration: "Sep 2021 – Jul 2025",
      status: "Graduated"
    }
  ];

  const certifications = [
    { name: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco", status: "Certified", color: "text-neon-blue" },
    { name: "Ethical Hacking", issuer: "Cisco", status: "Certified", color: "text-neon-green" },
    { name: "Security Analyst", issuer: "Cybershujaa Program", status: "Certified", color: "text-text-primary" },
    { name: "Enterprise Security in Practice", issuer: "IBM", status: "Certified", color: "text-neon-blue" },
    { name: "Professional Foundations", issuer: "ALX", status: "Completed", color: "text-neon-green" },
    { name: "Networking and Administration", issuer: "Fundamentals", status: "Completed", color: "text-text-primary" }
  ];

  const awards = [
    { 
      title: "Kenya Cybergame", 
      event: "National Cybersecurity Competition", 
      date: "Ongoing",
      description: "Currently participating in the Kenya Cybergame, actively engaging in national-level cybersecurity challenges encompassing penetration testing, defense operations, and incident response."
    },
    { 
      title: "Advent of Cyber 2024", 
      event: "TryHackMe", 
      date: "Jan 2025",
      description: "Successfully completed TryHackMe's Advent of Cyber 2024, a 25-day challenge focused on real-world cybersecurity scenarios, including threat simulation, log analysis, vulnerability exploitation, malware analysis, and cloud security."
    },
    { 
      title: "University CTF 2024: Binary Badlands", 
      event: "Hack The Box", 
      date: "Dec 2024",
      description: "Successfully completed the University CTF 2024: Binary Badlands, an advanced cybersecurity competition organized by Hack The Box. Demonstrated expertise in binary exploitation, reverse engineering, coding, forensics, and vulnerability analysis."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 mt-12 space-y-24">
      
      {/* SECTION 1: WHOAMI & SKILLS */}
      <div>
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

          {/* Right Column: Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 space-y-8"
          >
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
          </motion.div>
        </div>
      </div>

      {/* SECTION 2: EXPERIENCE & EDUCATION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8 border-b border-surface pb-4">
            <Briefcase className="text-neon-green" size={28} />
            <h2 className="text-3xl font-bold text-text-primary">Experience</h2>
          </div>
          
          <div className="space-y-8 border-l border-surface pl-6 ml-3 relative">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-neon-green rounded-full shadow-[0_0_10px_rgba(0,255,153,0.5)]"></div>
                
                <h3 className="text-xl font-bold text-text-primary">{job.role}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 font-mono text-sm">
                  <span className="text-neon-blue">{job.company}</span>
                  <span className="hidden sm:inline text-surface">|</span>
                  <span className="text-text-secondary">{job.duration}</span>
                </div>
                <p className="text-text-secondary mb-4 leading-relaxed text-sm">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tool) => (
                    <span key={tool} className="px-2 py-1 text-xs border border-surface rounded text-text-primary bg-surface/30">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8 border-b border-surface pb-4">
            <GraduationCap className="text-neon-blue" size={28} />
            <h2 className="text-3xl font-bold text-text-primary">Education</h2>
          </div>
          
          <div className="space-y-8 border-l border-surface pl-6 ml-3 relative">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-neon-blue rounded-full shadow-[0_0_10px_rgba(0,153,255,0.5)]"></div>
                
                <h3 className="text-xl font-bold text-text-primary">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 font-mono text-sm">
                  <span className="text-neon-green">{edu.school}</span>
                  <span className="hidden sm:inline text-surface">|</span>
                  <span className="text-text-secondary">{edu.duration}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-surface border border-surface text-text-primary text-sm rounded">
                  Status: {edu.status}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* SECTION 3: CERTIFICATIONS & AWARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6 border-b border-surface pb-4">
            <Award className="text-neon-blue" size={28} />
            <h2 className="text-3xl font-bold text-text-primary">Certifications</h2>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="p-4 bg-surface border border-surface rounded-lg hover:border-neon-blue/50 transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-text-primary">{cert.name}</h3>
                  <span className={`text-xs font-mono px-2 py-1 bg-background rounded border border-surface ${cert.color}`}>
                    {cert.status}
                  </span>
                </div>
                <p className="text-sm text-text-secondary font-mono">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Honors & Awards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6 border-b border-surface pb-4">
            <Trophy className="text-text-primary" size={28} />
            <h2 className="text-3xl font-bold text-text-primary">Achievements</h2>
          </div>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="p-5 border-l-2 border-surface hover:border-neon-green transition-colors bg-surface/30 group">
                <h3 className="font-bold text-text-primary mb-2 group-hover:text-neon-green transition-colors">{award.title}</h3>
                
                <div className="flex justify-between text-sm items-center mb-3">
                  <span className="font-mono text-neon-blue">{award.event}</span>
                  <span className="font-mono text-text-secondary text-xs bg-surface px-2 py-1 rounded border border-surface">
                    {award.date}
                  </span>
                </div>
                
                <p className="text-sm text-text-secondary leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

    </div>
  );
}