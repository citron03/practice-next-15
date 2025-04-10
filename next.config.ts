import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `vanilla_extract_${hash}`,
});

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: true,
  },
  // useEffect 두 번 실행 방지
  reactStrictMode: false,
};

export default withVanillaExtract(nextConfig);
