/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "pastor-reuben-wilson.vercel.app",
          },
        ],
        destination: "https://www.pastoreubenwilson.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;