import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: true,
  },
  // useEffect 두 번 실행 방지
  reactStrictMode: false,
};

export default nextConfig;
