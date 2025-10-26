'use client';

import React, { useState, useEffect } from 'react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    // This effect demonstrates that effects are cleaned up while the
    // component is inside a hidden <Activity> boundary (React 19 behavior).
    const id = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <aside
      style={{
        width: isExpanded ? 300 : 120,
        transition: 'width 0.25s',
        border: '1px solid #ddd',
        padding: 12,
        borderRadius: 8,
        background: '#fff',
      }}
    >
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={() => setIsExpanded((p) => !p)}>
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
        <div style={{ marginLeft: 'auto', fontSize: 12, color: '#666' }}>time: {time}s</div>
      </div>

      {isExpanded && (
        <nav style={{ marginTop: 12 }}>
          <ul style={{ paddingLeft: 16 }}>
            <li>Menu item A</li>
            <li>Menu item B</li>
            <li>Menu item C</li>
          </ul>
        </nav>
      )}
    </aside>
  );
}
