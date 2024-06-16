/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
    ],
  },
};


export default nextConfig;
