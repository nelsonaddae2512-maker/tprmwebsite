/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // No basePath/assetPrefix for custom domain or user page
};
export default nextConfig;
