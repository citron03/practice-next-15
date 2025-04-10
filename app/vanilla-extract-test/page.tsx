import React from 'react';

import { button, container } from './index.css';

const VanillaExtractTestPage = () => {
  return (
    <main className={container}>
      <h1>Vanilla Extract + Next.js 15</h1>
      <button className={button({ color: 'primary', size: 'large' })}>Primary Large Button</button>
      <button className={button({ color: 'secondary', size: 'small' })}>
        Secondary Small Button
      </button>
    </main>
  );
};

export default VanillaExtractTestPage;
