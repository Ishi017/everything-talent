import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your existing config options here
  eslint: {
    ignoreDuringBuilds: true, // This disables ESLint during builds
  },
};

export default nextConfig;