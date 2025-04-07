import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
    assetPrefix: '/out',
    basePath: '/out',
    output: 'export'
};

export default nextConfig;
