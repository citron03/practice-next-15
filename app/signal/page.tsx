'use client';

import { useState } from 'react';
import { proxy, useSnapshot } from 'valtio';

const state = proxy({ counter: 0 });

export default function SignalExample() {
  const snap = useSnapshot(state);
  const [localState, setLocalState] = useState(0);

  console.log('component rendered');

  return (
    <div>
      <p>useState: {localState}</p>
      <button onClick={() => setLocalState(localState + 1)}>+ state</button>

      <p>signal: {snap.counter}</p>
      <button onClick={() => state.counter++}>+ signal</button>
    </div>
  );
}
