'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TabsExample from './TabsExample';

// Note: React 19 introduced <Activity>. In environments without it, we
// fallback to simple CSS-based hiding while preserving DOM/state.
// If your React version supports Activity, replace the fallback with:
// import { Activity } from 'react';

export default function ActivityDemoPage() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <main style={{ display: 'grid', gap: 16, padding: 24 }}>
      <h1>Activity API Demo</h1>
      <p>
        이 페이지는 <code>&lt;Activity&gt;</code> 경계의 동작을 데모합니다. React 버전이 Activity를
        지원하면 경계를 사용하세요. 여기서는 호환을 위해 간단한 숨김(fallback) 방식을 사용합니다.
      </p>

      <section style={{ display: 'flex', gap: 16 }}>
        <div style={{ flex: '0 0 340px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            <button onClick={() => setShowSidebar((p) => !p)}>Toggle Sidebar</button>
          </div>

          {/* Fallback: hide with CSS but keep DOM mounted */}
          <div style={{ display: showSidebar ? 'block' : 'none' }}>
            <Sidebar />
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <TabsExample />
        </div>
      </section>

      <section>
        <h2>Notes / Caveats</h2>
        <ul>
          <li>숨김 상태에서는 Effects가 정리(clean-up)될 수 있습니다.</li>
          <li>비디오나 오디오처럼 외부 리소스를 제어해야 하는 경우 수동 정리가 필요합니다.</li>
          <li>Activity는 실험적입니다. 사용 전 React 버전을 확인하세요.</li>
        </ul>
      </section>
    </main>
  );
}
