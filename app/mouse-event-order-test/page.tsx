"use client";
"use client";

import { useState } from "react";

const MouseEventOrderTest = () => {
  const [allowClick, setAllowClick] = useState(false);

  const handleMouseDown = () => {
    console.log("MouseDown");
    setAllowClick(true); // 마우스를 눌렀을 때 클릭 허용
  };

  const handleMouseUp = () => {
    console.log("MouseUp");
    setTimeout(() => setAllowClick(false), 100); // 짧은 지연 후 상태 초기화
  };

  const handleClick = () => {
    if (allowClick) {
      console.log("Click");
    } else {
      console.log("Click blocked");
    }
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
    >
      Controlled Click
    </button>
  );
};

export default MouseEventOrderTest;
