/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    webpack: (config) => {
      config.externals = [...config.externals, 'bcrypt'];
      return config;
    },
  };
  

export default nextConfig;
