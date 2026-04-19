import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to build static HTML for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;