import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        
        <Navbar />

        <main className="pt-16 min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}