/// <reference lib="webworker" />
import { expose } from 'comlink';

console.log('Worker: Web Worker loaded');

const api = {
  getData() {
    return 'Hello from Comlink Web Worker in TanStack Start!';
  },
  heavyComputation(num: number) {
    console.log('Worker: Starting heavy computation...');
    const start = performance.now();
    let result = 0;
    for (let i = 0; i < num; i++) {
      result += Math.sqrt(i);
    }
    const end = performance.now();
    console.log(`Worker: Computation finished in ${end - start}ms`);
    return result;
  },
};

export type WorkerApi = typeof api;

expose(api);
