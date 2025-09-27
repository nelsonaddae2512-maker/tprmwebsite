/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build should succeed even if lint/type issues exist (you can turn these off later)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreDuringBuilds: true },

  // Do NOT set `output: 'export'` for Vercel native Next.js
  // Do NOT set `trailingSlash` unless you have a specific reason
  // No basePath, rewrites, or images config needed for this site
};

export default nextConfig;
