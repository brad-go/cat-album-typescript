export const useScroll = (selector: string) => {
  const element = document.querySelector(`[data-scroll=${selector}]`)!;

  if (!element) return;

  const options = {
    root: null,
    threshold: 0.3,
  };

  const callback = (
    enries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    enries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        observer.disconnect();
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(element);
};
