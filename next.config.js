/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:  "play-lh.googleusercontent.com",
                port: '',
                pathname: '/**',

            },
            {
                protocol: 'https',
                hostname:  "files.edgestore.dev",
                port: '',
                pathname: '/**',

            },
            {
                protocol: 'https',
                hostname:  "example.com",
                port: '',
                pathname: '/**',

            },
            {
                protocol: 'https',
                hostname:  "miro.medium.com",
                port: '',
                pathname: '/v2/**',

            },
            
        ],
    }
}

module.exports = nextConfig
