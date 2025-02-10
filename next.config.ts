import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { 
            key: 'Access-Control-Allow-Origin', 
            // Provide a fallback value using || operator
            value: process.env.ALLOWED_ORIGINS || '*'
          },
          { 
            key: 'Access-Control-Allow-Methods', 
            value: 'GET,POST,PUT,DELETE,OPTIONS'
          },
          { 
            key: 'Access-Control-Allow-Headers', 
            value: 'Content-Type, Authorization'
          },
        ],
      },
    ]
  },
};

export default nextConfig;
