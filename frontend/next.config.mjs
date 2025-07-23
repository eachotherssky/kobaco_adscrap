/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/kobaco_adscrap',
  assetPrefix: '/kobaco_adscrap/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
