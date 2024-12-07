"use client";

import { useState, useEffect, JSX } from "react";

export default function ReactCompilerTest(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  // 상태 변경 함수 - 일반적으로 useCallback으로 감싸야 함
  const handleButtonClick = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log(`RENDERED !! Count updated: ${count}`);

  // useEffect에서 handleButtonClick 의존성 테스트
  useEffect(() => {
    handleButtonClick();
    // handleButtonClick이 메모리제이션되지 않았음에도 무한 렌더링이 발생하지 않음
  }, [handleButtonClick]);

  return (
    <div style={{ fontFamily: "Arial", margin: "20px" }}>
      <h1>React Compiler Test</h1>
      <p>Current Count: {count}</p>
      <button
        onClick={handleButtonClick}
        style={{ padding: "10px 20px", marginRight: "10px" }}
      >
        Increment Count
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ padding: "10px" }}
      />
    </div>
  );
}
