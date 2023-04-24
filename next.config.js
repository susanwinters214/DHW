/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dallashomewatch.com",       
      },
    ],
  },
};



module.exports = nextConfig
