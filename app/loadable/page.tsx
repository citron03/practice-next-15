'use client';
import loadable from '@loadable/component';
import React from 'react';

const LazyComponent = loadable(() => import('./LazyComponent'));

function LoadablePage() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <LazyComponent />
    </div>
  );
}
export default LoadablePage;
