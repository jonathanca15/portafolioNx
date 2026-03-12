import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  basePath: '/portafolioNx',
  assetPrefix: '/portafolioNx/',
};

export default nextConfig;
