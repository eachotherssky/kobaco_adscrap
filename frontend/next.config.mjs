/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/',
  assetPrefix: '/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
