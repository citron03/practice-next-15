import { useEffect, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/comlink')({
  component: WorkerPage,
});

function WorkerPage() {
  const [data, setData] = useState<string>('');
  const [computationResult, setComputationResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [worker, setWorker] = useState<Worker | null>(null);

  useEffect(() => {
    // Create worker
    const w = new Worker('/comlink-worker.js');
    console.log('Worker created:', w);

    // Set up message handler
    w.onmessage = (event) => {
      console.log('Main: Received from worker:', event.data);
      const { id, result } = event.data;

      if (id === 'getData') {
        setData(result);
      } else if (id === 'heavyComputation') {
        setComputationResult(result);
        setLoading(false);
      }
    };

    setWorker(w);

    return () => w.terminate();
  }, []);

  const handleGetData = () => {
    if (!worker) return;
    worker.postMessage({ type: 'getData', id: 'getData' });
  };

  const handleHeavyComputation = () => {
    if (!worker) return;
    setLoading(true);
    worker.postMessage({
      type: 'heavyComputation',
      id: 'heavyComputation',
      data: { num: 10_000_000 },
    });
  };

  return (
    <div className="p-8 font-sans max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Web Worker Demo (Pure postMessage)</h1>
      <p className="text-gray-600 mb-8">TanStack Start + Web Worker = 간단한 백그라운드 처리!</p>

      <div className="mb-8 p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">1. Simple Data Fetch</h2>
        <button
          onClick={handleGetData}
          disabled={!worker}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Get Data from Worker
        </button>
        {data && (
          <p className="mt-4">
            Result: <strong className="text-blue-600">{data}</strong>
          </p>
        )}
      </div>

      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">2. Heavy Computation (Off-Main-Thread)</h2>
        <p className="text-gray-600 mb-4">
          This calculation runs in the background, so the UI remains responsive.
        </p>
        <button
          onClick={handleHeavyComputation}
          disabled={!worker || loading}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {loading ? 'Calculating...' : 'Run Heavy Computation'}
        </button>
        {computationResult !== null && (
          <p className="mt-4">
            Result: <strong className="text-green-600">{computationResult.toFixed(2)}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default WorkerPage;
