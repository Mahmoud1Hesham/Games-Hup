/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.freetogame.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
