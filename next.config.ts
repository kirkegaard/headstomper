import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.0.0.60"],
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
