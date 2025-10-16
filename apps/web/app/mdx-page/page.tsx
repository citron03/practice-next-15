'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const SampleContent = dynamic(() => import('./content.mdx'));

// with webpack 5, didn't work in turbopack
const MdxPage = () => {
  return (
    <div>
      <h1>MDX Page</h1>
      <SampleContent />
    </div>
  );
};

export default MdxPage;
