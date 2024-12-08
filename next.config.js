/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};
module.exports = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
