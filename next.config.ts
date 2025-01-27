import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Export the app as static files
  basePath: isProd ? '/piaoziyue.github.io' : '', // Set your repository name here
  assetPrefix: isProd ? '/piaoziyue.github.io/' : '', // Ensures assets load correctly in production
  images: {
    unoptimized: true, // Necessary for static site export with images
  },
};

export default nextConfig;
