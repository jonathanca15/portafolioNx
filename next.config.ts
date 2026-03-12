import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  basePath: '/nombreDeTuRepo',
  assetPrefix: '/nombreDeTuRepo/',
};

export default nextConfig;
