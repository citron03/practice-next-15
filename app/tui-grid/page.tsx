'use client';

import { useRef } from 'react';

import TuiGridReact, { TuiGridReactRef } from '../components/TuiGridReact';

export default function TuiGridPage() {
  const gridRef = useRef<TuiGridReactRef>(null);

  const handleReloadData = () => {
    gridRef.current?.reloadData([
      { id: 3, name: 'Alice Brown', age: 40 },
      { id: 4, name: 'Bob White', age: 22 },
    ]);
  };

  const handleLogInstance = () => {
    console.log('grid Instance : ', gridRef.current?.getInstance());
  };

  return (
    <div>
      <h1>TUI Grid with Instance</h1>
      <TuiGridReact
        ref={gridRef}
        columns={[
          { header: 'ID', name: 'id', width: 50 },
          { header: 'Name', name: 'name', width: 150 },
          { header: 'Age', name: 'age', width: 100 },
        ]}
        data={[
          { id: 1, name: 'John Doe', age: 30 },
          { id: 2, name: 'Jane Smith', age: 25 },
        ]}
      />
      <div>
        <button onClick={handleReloadData}>데이터 변경</button>
        <button onClick={handleLogInstance}>그리드 인스턴스 로깅</button>
      </div>
    </div>
  );
}
