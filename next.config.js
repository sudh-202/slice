/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable React's Strict Mode
    images: {
      domains: ['res.cloudinary.com'], // Allow images from this domain
    },
  };
  
  module.exports = nextConfig;
  