/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "pastoreubenwilson.com",
          },
        ],
        destination: "https://www.pastoreubenwilson.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;