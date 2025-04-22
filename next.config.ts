import type { NextConfig } from "next";
const dev = false;

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
    assetPrefix: dev ? '/out' : "",
    basePath: dev ? '/out' : "",
    output: 'export',
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|rtf|doc|docx)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'static/media/[name].[hash].[ext]',
                    publicPath: '/_next/',
                },
            },
        });
        return config;
    },

};

export default nextConfig;
