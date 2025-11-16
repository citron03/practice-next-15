'use client';
import { useState } from 'react';

import VirtualizedLisAbsolute from './absolute'; // Adjust the import path as necessary
import VirtualizedLisPadding from './padding'; // Adjust the import path as necessary

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

const VirtualListPage = () => {
  const [isAbsolute, setIsAbsolute] = useState(false);

  return (
    <div>
      <button onClick={() => setIsAbsolute(!isAbsolute)}>
        Change List / Now: {isAbsolute ? 'Absolute' : 'Padding'}
      </button>
      {isAbsolute ? (
        <VirtualizedLisAbsolute items={items} />
      ) : (
        <VirtualizedLisPadding items={items} />
      )}
    </div>
  );
};

export default VirtualListPage;
