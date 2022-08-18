/**
 * state가 여러 개일 경우 불필요한 렌더링이 여러번 일어나게 될 수 있다. 그러므로
 * 일정 시간 내에 여러 번의 렌더링이 실행되어야 한다면 일정 시간 뒤에 실행해준다.
 * @param callbackfn
 * @returns
 */
export const debounceFrame = (callbackfn: (time: number) => void) => {
  let nextFrameCallback = -1;

  // 클로저를 이용하기 위해 debounce를 실행하면 함수를 반환한다.
  return () => {
    // 실행이 예약된 함수(callback)가 있을 경우 캔슬한다.
    cancelAnimationFrame(nextFrameCallback);

    // 특정시간(timer) 후에 callback이 실행되도록 한다.
    // requestAnimationFrame은 디스플레이 주사율에 맞춰서 1초동안 실행될 횟수를 결정한다.
    nextFrameCallback = requestAnimationFrame(callbackfn);
  };
};
