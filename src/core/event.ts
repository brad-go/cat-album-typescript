/**
 * 이벤트를 등록할 수 있게 해주는 함수
 * @param selector - data-event 값
 * @param event - addEventListener로 넘기는 이벤트
 * @param callbackfn - event 발생 시 실행시킬 함수
 */
export const useEvent = (
  selector: string,
  event: keyof WindowEventMap,
  callbackfn: (e: Event) => void,
) => {
  const element: HTMLElement | null = document.querySelector(
    `[data-event="${selector}"]`,
  );

  if (element) {
    element.addEventListener(event, callbackfn);
  }
};
