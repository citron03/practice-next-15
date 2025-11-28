// Type-safe message protocol
export type WorkerRequest = { type: 'getData' } | { type: 'heavyComputation'; payload: number };

export type WorkerResponse =
  | { type: 'getData'; data: string }
  | { type: 'heavyComputation'; data: number };

console.log('[Worker] Starting...');

self.onmessage = (event: MessageEvent<WorkerRequest>) => {
  console.log('[Worker] Received:', event.data);

  const request = event.data;

  if (request.type === 'getData') {
    const response: WorkerResponse = {
      type: 'getData',
      data: 'Hello from Vite Native Worker! ⚡',
    };
    self.postMessage(response);
  } else if (request.type === 'heavyComputation') {
    const num = request.payload;
    console.log('[Worker] Computing with:', num);

    const start = performance.now();
    let result = 0;
    for (let i = 0; i < num; i++) {
      result += Math.sqrt(i);
    }
    const end = performance.now();
    console.log(`[Worker] Done in ${(end - start).toFixed(2)}ms`);

    const response: WorkerResponse = {
      type: 'heavyComputation',
      data: result,
    };
    self.postMessage(response);
  }
};

console.log('[Worker] Ready!');
