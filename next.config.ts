import type { NextConfig } from "next";
const dev = true;
const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
    assetPrefix: dev ? '/out' : "",
    basePath: dev ? '/out' : "",
    output: 'export'
};

export default nextConfig;
