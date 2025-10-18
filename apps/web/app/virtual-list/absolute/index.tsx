'use client';
import { useEffect, useRef, useState } from 'react';

const itemHeight = 50; // 각 아이템 높이
const bufferCount = 5; // 추가적으로 렌더링할 여유 아이템 수

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
        position: 'relative',
      }}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        {visibleItems.map((item, index) => (
          <div
            key={startIdx + index}
            style={{
              position: 'absolute',
              top: (startIdx + index) * itemHeight,
              height: itemHeight,
              width: '100%',
              borderBottom: '1px solid #ddd',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '10px',
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualizedList;
