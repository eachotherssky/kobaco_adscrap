/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kobaco_adscrap',
  assetPrefix: '/kobaco_adscrap',
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
