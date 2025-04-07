import type { NextConfig } from "next";
const dev = true;

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
    assetPrefix: dev ? '/out' : "",
    basePath: dev ? '/out' : "",
    output: 'export',
    webpack(config, { isServer }) {
        const prefix = config.assetPrefix ?? config.basePath ?? '';
        config.module.rules.push({
            test: /\.mp4$/,
            use: [{
                loader: 'file-loader',
                options: {
                    publicPath: `${prefix}/_next/static/media/`,
                    outputPath: `${isServer ? '../' : ''}static/media/`,
                    name: '[name].[hash].[ext]',
                },
            }],
        })
    }

};

export default nextConfig;
