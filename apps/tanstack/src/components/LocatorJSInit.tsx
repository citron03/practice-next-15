import { useEffect } from 'react';

export function LocatorJSInit() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@locator/runtime');
    }
  }, []);

  return null;
}
