console.log('Worker: Web Worker loaded (without Comlink)');

// Listen for messages from main thread
self.addEventListener('message', (event) => {
  const { type, id, data } = event.data;
  console.log('Worker: Received message:', type, data);

  if (type === 'getData') {
    // Simple data fetch
    const result = 'Hello from Web Worker in TanStack Start! (Pure postMessage)';
    self.postMessage({ id, result });
  } else if (type === 'heavyComputation') {
    // Heavy computation
    console.log('Worker: Starting heavy computation...');
    const start = performance.now();
    let result = 0;
    for (let i = 0; i < data.num; i++) {
      result += Math.sqrt(i);
    }
    const end = performance.now();
    console.log(`Worker: Computation finished in ${end - start}ms`);
    self.postMessage({ id, result });
  }
});

console.log('Worker: Ready to receive messages');
