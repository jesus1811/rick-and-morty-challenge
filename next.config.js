/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  images: {
    domains: ['rickandmortyapi.com'],
  },
};

module.exports = nextConfig;
