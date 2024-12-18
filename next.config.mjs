/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.WORDPRESS_HOSTNAME,
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admin.ictdalat.vn",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
