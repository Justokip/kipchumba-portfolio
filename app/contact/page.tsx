// src/app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  // Animation variants for staggering the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 mt-12 flex flex-col items-center">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-neon-blue">./</span>Initiate_Contact
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Open to tech opportunities in cybersecurity, vulnerability assessments, and secure IT infrastructure. Reach out through any of the secure channels below.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full space-y-6"
      >
        {/* TOP ROW: Location, Email, WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Location Card */}
          <motion.div variants={cardVariants}>
            <div className="bg-surface border border-surface rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-neon-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] h-full">
              <div className="p-4 bg-background rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={32} className="text-neon-blue" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Location</h3>
              <p className="text-text-secondary">Nairobi, Kenya<br/>(Remote/Global)</p>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div variants={cardVariants}>
            <a href="mailto:justuskipchumba29@gmail.com" className="bg-surface border border-surface rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-neon-green transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,102,0.1)] h-full block">
              <div className="p-4 bg-background rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail size={32} className="text-neon-green" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Email</h3>
              <p className="text-text-secondary truncate w-full px-2">justuskipchumba29@<br/>gmail.com</p>
            </a>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div variants={cardVariants}>
            {/* ⚠️  */}
            <Link href="https://wa.me/254729620398?text=Hello%20Kipchumba,%20I%20am%20reaching%20out%20from%20your%20portfolio..." target="_blank" rel="noopener noreferrer" className="bg-surface border border-surface rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-neon-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] h-full block">
              <div className="p-4 bg-background rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 text-neon-blue">
                {/* Official WhatsApp SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.065-.3-.15-1.265-.46-2.406-1.485-.886-.79-1.484-1.761-1.658-2.059-.173-.3-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">WhatsApp</h3>
              <p className="text-text-secondary">Direct Secure Chat</p>
            </Link>
          </motion.div>

        </div>

        {/* BOTTOM ROW: LinkedIn, GitHub (Centered) */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          
          {/* LinkedIn Card */}
          <motion.div variants={cardVariants} className="w-full md:w-1/3">
            <Link href="https://www.linkedin.com/in/justus-kipchumba/" target="_blank" rel="noopener noreferrer" className="bg-surface border border-surface rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-neon-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] h-full block">
              <div className="p-4 bg-background rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 text-neon-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">LinkedIn</h3>
              <p className="text-text-secondary">Professional Network</p>
            </Link>
          </motion.div>

          {/* GitHub Card */}
          <motion.div variants={cardVariants} className="w-full md:w-1/3">
            <Link href="https://github.com/Justokip" target="_blank" rel="noopener noreferrer" className="bg-surface border border-surface rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-neon-green transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,102,0.1)] h-full block">
              <div className="p-4 bg-background rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 text-neon-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.6a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">GitHub</h3>
              <p className="text-text-secondary">Code & Writeups</p>
            </Link>
          </motion.div>

        </div>
      </motion.div>

    </div>
  );
}