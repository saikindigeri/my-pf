import { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['example.com', 'res.cloudinary.com'], // Add external domains here
  },
};

export default nextConfig;
