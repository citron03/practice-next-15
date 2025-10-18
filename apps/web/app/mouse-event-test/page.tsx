'use client';

/**
 *
 * 마우스와 관련된 이벤트들의 실행 순서가 어떻게 되는지 테스트하기
 * 작성글: https://citron031.tistory.com/entry/Javascript-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EC%9D%98-%EC%8B%A4%ED%96%89%EC%88%9C%EC%84%9C-%ED%8C%8C%EC%95%85%ED%95%98%EA%B8%B0-onMouseDown%EC%9D%80-onClick%EB%B3%B4%EB%8B%A4-%EB%A8%BC%EC%A0%80-%EC%8B%A4%ED%96%89%EB%90%9C%EB%8B%A4-%F0%9F%91%BB
 */
const MouseEventTest = () => {
  const logEvent = (eventName: string) => {
    console.log(eventName);
  };

  return (
    <div>
      <h1>MouseEventTest</h1>
      <button
        onMouseDown={() => logEvent('MouseDown')}
        onMouseUp={() => logEvent('MouseUp')}
        onClick={() => logEvent('Click')}
      >
        Click Me
      </button>
    </div>
  );
};

export default MouseEventTest;
