'use client';

import React, { useState } from 'react';

export default function TabsExample() {
  const [tab, setTab] = useState<'home' | 'contact'>('home');

  return (
    <div style={{ border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => setTab('home')}>Home</button>
        <button onClick={() => setTab('contact')}>Contact</button>
      </div>

      <div style={{ display: 'grid', gap: 12 }}>
        {/* We intentionally do not use conditional mounting here to preserve DOM/state */}
        <div style={{ display: tab === 'home' ? 'block' : 'none' }}>
          <h3>Home</h3>
          <p>This is the home tab content. Switch to Contact and back to see state preserved.</p>
        </div>

        <div style={{ display: tab === 'contact' ? 'block' : 'none' }}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [message, setMessage] = useState('');
  return (
    <div>
      <h3>Contact Us</h3>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={6}
        style={{ width: '100%' }}
      />
      <p>Message length: {message.length}</p>
    </div>
  );
}
