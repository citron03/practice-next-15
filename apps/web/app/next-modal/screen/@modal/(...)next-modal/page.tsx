import Link from 'next/link';
import React from 'react';

const Modal = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <h1>Modal 🍔</h1>
      <Link href="/next-modal/screen">닫기</Link>
    </div>
  );
};

export default Modal;
