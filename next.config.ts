import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.0.0.60"],
  images: {
    minimumCacheTTL: 2592000,
    qualities: [60, 75],
  },
  outputFileTracingExcludes: {
    "*": ["./public/assets/gallery/**/*"],
  },
};

export default nextConfig;
