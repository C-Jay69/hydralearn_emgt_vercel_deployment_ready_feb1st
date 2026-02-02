import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optional: External packages for AI
  transpilePackages: ['@genkit-ai', '@google/generative-ai'],
  // Optional: Add these for better Vercel compatibility
  images: {
    unoptimized: true, // If you're having image optimization issues
  },
};

export default nextConfig;