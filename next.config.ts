import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d20d1u0tfijfbg.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "autobusiness.com.br",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avantgarde.com.br",
      },
    ],
  },
};

export default nextConfig;
