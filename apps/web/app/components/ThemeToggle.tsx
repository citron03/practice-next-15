'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-pressed={theme === 'dark'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        appearance: 'none',
        border: '1px solid rgba(0,0,0,0.12)',
        background: 'transparent',
        color: 'var(--foreground)',
        padding: '6px 10px',
        borderRadius: 8,
        cursor: 'pointer',
        fontSize: 14,
      }}
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
