/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
  },
  env: {
    NEXTAUTH_URL: 'http://localhost:3000',
  },
};

module.exports = nextConfig;
