/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add this 'images' configuration
    images: {
      domains: [
        'res.cloudinary.com', // Your Cloudinary domain
        'placehold.co'        // For the placeholder images if you use them in production
      ],
    },
    // Other Next.js configurations can go here
    // For example, if you're using experimental features or specific webpack configs
  };
  
  // Use CommonJS syntax for the Next.js config file
  module.exports = nextConfig;