import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Terminal } from "lucide-react"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Kipchumba | Cybersecurity & IT Specialist",
  description: "Portfolio of a Cybersecurity Analyst and IT Specialist based in Nairobi, Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth`}>
      <body className="font-sans antialiased selection:bg-neon-green selection:text-background">
        
        <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-surface">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-neon-green font-mono font-bold text-xl hover:text-neon-blue transition-colors">
              <Terminal size={24} />
              <span>root@kipchumba:~#</span>
            </Link>
            
            <div className="hidden md:flex gap-8 text-sm font-medium text-text-secondary font-mono">
              <Link href="/about" className="hover:text-neon-green transition-colors">./about</Link>
              <Link href="/projects" className="hover:text-neon-green transition-colors">./projects</Link>
              <Link href="/blog" className="hover:text-neon-green transition-colors">./blog</Link>
            </div>

            <Link href="/contact" className="hidden md:block px-5 py-2 text-sm font-bold bg-neon-blue text-background rounded hover:opacity-90 transition-all">
              Initiate Contact
            </Link>
          </div>
        </nav>

        <main className="pt-16 min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}