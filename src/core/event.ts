/**
 * window가 로드된 이후에 이벤트를 등록할 수 있게 해주는 함수
 * @param selector - data-event 값
 * @param event - addEventListener로 넘기는 이벤트
 * @param callbackfn - event 발생 시 실행시킬 함수
 */
export const useEvent = (
  selector: string,
  event: keyof WindowEventMap,
  callbackfn: Function,
) => {
  window.addEventListener('load', () => {
    const element: HTMLElement = document.querySelector(
      `[data-event=${selector}]`,
    )!;
    element.addEventListener(event, () => callbackfn());
  });
};
