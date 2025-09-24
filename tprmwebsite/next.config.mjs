/** @type {import('next').NextConfig} */
const nextConfig = {
  // no `output: 'export'`, no `trailingSlash`
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreDuringBuilds: true }
};
export default nextConfig;


