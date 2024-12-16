"use client";

const MouseEventTest = () => {
  const logEvent = (eventName: string) => {
    console.log(eventName);
  };

  return (
    <div>
      <h1>MouseEventTest</h1>
      <button
        onMouseDown={() => logEvent("MouseDown")}
        onMouseUp={() => logEvent("MouseUp")}
        onClick={() => logEvent("Click")}
      >
        Click Me
      </button>
    </div>
  );
};

export default MouseEventTest;
