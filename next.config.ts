import { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['example.com', 'res.cloudinary.com','via.placeholder.com'], // Add external domains here
  },
};

export default nextConfig;
