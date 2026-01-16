/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This creates an 'out' folder during build
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
