import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/TechComponentes",
  env: {
    NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.wpp?.replace(/\D/g, "") ?? "",
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.awsli.com.br' },
      { protocol: 'https', hostname: 'images.tcdn.com.br' },
      { protocol: 'https', hostname: 'www.usinainfo.com.br' },
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'http2.mlstatic.com' },
      { protocol: 'https', hostname: 'www.makerhero.com' },
      { protocol: 'https', hostname: 'www.saravati.com.br' },
      { protocol: 'https', hostname: 'cdn.xingosoftware.com' },
      { protocol: 'https', hostname: 'developer-blogs.nvidia.com' },
    ],
  },
};

export default nextConfig;
