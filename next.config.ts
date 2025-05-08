import withMdxCreate from '@next/mdx';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const withMDX = withMdxCreate({
  // Optionally provide remark and rehype plugins
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
  },
  extension: /\.mdx?$/,
});

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

export default withMDX(withVanillaExtract(nextConfig));
