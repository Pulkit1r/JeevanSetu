import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    //  Danger: will ignore type errors at build time
    ignoreBuildErrors: true,
  },
  eslint: {
    //  Danger: will ignore ESLint errors at build time
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
