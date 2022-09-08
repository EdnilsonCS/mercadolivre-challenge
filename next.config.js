/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["mla-s1-p.mlstatic.com", "http2.mlstatic.com"]
  }
}



module.exports = nextConfig
