/* eslint-env browser */
/* global CustomEvent, Event, EventListener */
'use client';
import { useEffect } from 'react';

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
