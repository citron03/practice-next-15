import { useEffect } from 'react';

export function LocatorJSInit() {
  useEffect(() => {
    if (import.meta.env.DEV && typeof window !== 'undefined') {
      import('@locator/runtime');
    }
  }, []);

  return null;
}
