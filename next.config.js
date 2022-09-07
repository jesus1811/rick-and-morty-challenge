/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  images: {
    domains: ['rickandmortyapi.com'],
  },
};

module.exports = nextConfig;
