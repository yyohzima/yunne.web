/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  compiler: {
    emotion: true,
  },
  trailingSlash: true,
}

export default nextConfig
