/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["imgs.search.brave.com", "miro.medium.com"],
  },
};

module.exports = nextConfig;
