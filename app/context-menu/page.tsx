'use client';

import { MouseEvent, useState } from 'react';

function ContextMenuPage() {
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setMenu({ x: e.clientX, y: e.clientY });
  };

  const closeMenu = () => setMenu(null);

  return (
    <div
      onContextMenu={handleContextMenu}
      style={{ width: '100%', height: '300px', background: '#f5f5f5' }}
    >
      {menu && (
        <ul
          onClick={closeMenu}
          style={{
            position: 'absolute',
            top: menu.y,
            left: menu.x,
            background: '#fff',
            border: '1px solid #ccc',
            padding: 0,
            margin: 0,
            listStyle: 'none',
            zIndex: 1000,
            boxShadow: '0px 2px 6px rgba(0,0,0,0.2)',
          }}
        >
          <li style={{ padding: '8px 12px', cursor: 'pointer' }}>메뉴 항목 1</li>
          <li style={{ padding: '8px 12px', cursor: 'pointer' }}>메뉴 항목 2</li>
          <li style={{ padding: '8px 12px', cursor: 'pointer' }}>닫기</li>
        </ul>
      )}
      <p>여기서 우클릭 해보세요 👇</p>
    </div>
  );
}

export default ContextMenuPage;
