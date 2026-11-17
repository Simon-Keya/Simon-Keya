import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  // Legacy routes now live as sections on the home page.
  async redirects() {
    return [
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/skills', destination: '/#capabilities', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
    ]
  },
}

export default nextConfig
