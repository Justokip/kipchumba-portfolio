import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath removed because the site is now hosted on a custom domain (kipchumba.me)
  output: 'export', // Tells Next.js to build static HTML for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // Allow this development host if the site is opened via local network IP
  allowedDevOrigins: ['http://localhost:3000', 'http://192.168.43.44:3000'],
};

export default nextConfig;