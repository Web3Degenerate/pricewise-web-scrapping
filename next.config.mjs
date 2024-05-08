/** @type {import('next').NextConfig} */
// Updated at 1:18:41: https://youtu.be/lh9XVGv6BHs?si=C09NhK-fv4pSx9cc&t=4721
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images:{
    domains: ['m.media-amazon.com']
  }
};

export default nextConfig;
// module.exports = nextConfig
