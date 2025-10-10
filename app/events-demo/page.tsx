/* eslint-env browser */
/* global CustomEvent, Event, EventListener, HTMLElement, HTMLDivElement */
'use client';
import React, { useCallback, useEffect, useState } from 'react';

/**
 * 간단한 EventBus (CustomEvent 기반)
 */

type EventMap = {
  clickButton: { id: string };
};

export function dispatchAppEvent<K extends keyof EventMap>(name: K, detail: EventMap[K]) {
  const e = new CustomEvent(name as string, { detail });
  window.dispatchEvent(e);
}

export function useAppEventListener<K extends keyof EventMap>(
  name: K,
  handler: (detail: EventMap[K]) => void,
) {
  useEffect(() => {
    const onEvent = (e: Event) => {
      const ce = e as CustomEvent<EventMap[K]>;
      handler(ce.detail);
    };
    window.addEventListener(name as string, onEvent as EventListener);
    return () => window.removeEventListener(name as string, onEvent as EventListener);
  }, [name, handler]);
}

function OuterWrapper({
  children,
  onLog,
}: {
  children: React.ReactNode;
  onLog: (msg: string) => void;
}) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement | null;
      const btn = target?.closest('[data-role="app-btn"]') as HTMLElement | null;
      if (btn) {
        const id = btn.dataset.id;
        onLog(`[delegation] 클릭 감지 (id=${id})`);
      } else {
        onLog('[delegation] wrapper 클릭(비버튼)');
      }
    },
    [onLog],
  );

  useAppEventListener('clickButton', (d) => {
    onLog(`[event-bus] 전역 이벤트 수신 (id=${d.id})`);
  });

  return (
    <div
      onClick={handleClick}
      style={{ border: '2px solid #2b6cb0', padding: 16, borderRadius: 8, position: 'relative' }}
    >
      <div style={{ fontSize: 12, color: '#2b6cb0', marginBottom: 8 }}>
        OuterWrapper (delegation)
      </div>
      {children}
    </div>
  );
}

function MidWrapper({
  children,
  onLog,
  captureStop,
}: {
  children: React.ReactNode;
  onLog: (msg: string) => void;
  captureStop?: boolean;
}) {
  const handleClick = (e: React.MouseEvent) => {
    onLog('[mid] 클릭 감지');
    if (captureStop) {
      e.stopPropagation();
      onLog('[mid] stopPropagation 실행 (문제 유발 가능)');
    }
  };

  useAppEventListener('clickButton', (d) => {
    onLog(`[mid][event-bus] 전역 이벤트 수신 (id=${d.id})`);
  });

  return (
    <div
      onClick={handleClick}
      style={{ border: '1px dashed #22543d', padding: 12, borderRadius: 6 }}
    >
      <div style={{ fontSize: 12, color: '#22543d', marginBottom: 6 }}>
        MidWrapper {captureStop ? '(stopPropagation 켬)' : ''}
      </div>
      {children}
    </div>
  );
}

function ButtonWrapper({ id, onLog }: { id: string; onLog: (msg: string) => void }) {
  const handleNativeClick = (_e: React.MouseEvent) => {
    onLog(`[native] 버튼 onClick (id=${id})`);
    dispatchAppEvent('clickButton', { id });
  };

  return (
    <div style={{ padding: 8, background: '#f7fafc', borderRadius: 4 }}>
      <button
        data-role="app-btn"
        data-id={id}
        onClick={handleNativeClick}
        style={{ padding: '8px 12px', cursor: 'pointer' }}
      >
        Dispatch & Native Click ({id})
      </button>
    </div>
  );
}

export default function EventsDemoPage() {
  const [logs, setLogs] = useState<string[]>([]);
  const [midStops, setMidStops] = useState(false);

  const pushLog = (s: string) =>
    setLogs((prev) => [new Date().toLocaleTimeString() + ' ' + s, ...prev].slice(0, 20));

  return (
    <main style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>중첩 래핑 구조에서 이벤트 처리 데모</h1>
      <p style={{ maxWidth: 720 }}>
        좌측은 중첩된 래퍼(Outer → Mid → ButtonWrapper) 구조입니다. 데모는 두 가지 패턴을 동시에
        보여줍니다:
      </p>
      <ul>
        <li>이벤트 위임 (OuterWrapper의 onClick에서 target.closest 검사)</li>
        <li>전역 커스텀 이벤트 버스 (dispatchAppEvent / useAppEventListener)</li>
      </ul>

      <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: 8 }}>
            <input type="checkbox" checked={midStops} onChange={() => setMidStops((s) => !s)} />{' '}
            MidWrapper에서 stopPropagation 토글 (문제 시뮬레이션)
          </label>

          <OuterWrapper onLog={pushLog}>
            <MidWrapper onLog={pushLog} captureStop={midStops}>
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <ButtonWrapper id="btn-1" onLog={pushLog} />
                <ButtonWrapper id="btn-2" onLog={pushLog} />
              </div>
            </MidWrapper>
          </OuterWrapper>

          <div style={{ marginTop: 12 }}>
            <button
              onClick={() => {
                dispatchAppEvent('clickButton', { id: 'external-1' });
                pushLog('[manual] 외부에서 dispatchAppEvent 호출');
              }}
            >
              외부에서 전역 이벤트 발생
            </button>
          </div>
        </div>

        <aside style={{ width: 420 }}>
          <div style={{ fontSize: 13, marginBottom: 8 }}>로그 (최신 20개)</div>
          <div
            style={{
              height: 360,
              overflow: 'auto',
              border: '1px solid #e2e8f0',
              padding: 8,
              borderRadius: 6,
              background: '#fff',
            }}
          >
            {logs.length === 0 ? (
              <div style={{ color: '#718096' }}>아직 이벤트가 없습니다.</div>
            ) : null}
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {logs.map((l, i) => (
                <li
                  key={i}
                  style={{ fontSize: 13, padding: '6px 0', borderBottom: '1px dashed #edf2f7' }}
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: 12, fontSize: 12, color: '#4a5568' }}>
            참고: 프로젝트의 홈은 <a href="/">{'/'}</a> 이고, 기존 설치 버튼 컴포넌트는{' '}
            <code>app/components/InstallButton.tsx</code> 입니다.
          </div>
        </aside>
      </div>
    </main>
  );
}
