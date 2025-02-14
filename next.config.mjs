/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions:{
        quietDeps: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000',
                pathname: '/file-bucket/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
