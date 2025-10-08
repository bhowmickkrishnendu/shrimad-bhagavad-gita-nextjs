/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shrimadbhagvadgita.org',
      },
    ],
  },
};

module.exports = nextConfig;
