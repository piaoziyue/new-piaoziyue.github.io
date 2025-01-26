import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Necessary for exporting a static site
  basePath: isProd ? "/piaoziyue.github.io" : "", // Update with your repository name
  assetPrefix: isProd ? "/piaoziyue.github.io/" : "", // Ensures assets have the correct path in production
  images: {
    unoptimized: true, // Required for static site export to handle images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
