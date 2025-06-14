'use client';
import { useEffect, useRef, useState } from 'react';

const itemHeight = 50;
const bufferCount = 5;

const VirtualizedList = ({ items }: { items: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = Math.ceil(window.innerHeight / itemHeight) + bufferCount * 2;

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const newStartIdx = Math.max(0, Math.floor(scrollTop / itemHeight) - bufferCount);
    setStartIdx(newStartIdx);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const endIdx = Math.min(items.length, startIdx + visibleCount);
  const visibleItems = items.slice(startIdx, endIdx);

  return (
    <div
      ref={containerRef}
      style={{
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <div style={{ height: startIdx * itemHeight }} />
      {visibleItems.map((item, index) => (
        <div
          key={startIdx + index}
          style={{
            height: itemHeight,
            borderBottom: '1px solid #ddd',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
          }}
        >
          {item}
        </div>
      ))}
      <div style={{ height: (items.length - endIdx) * itemHeight }} />
    </div>
  );
};

export default VirtualizedList;
