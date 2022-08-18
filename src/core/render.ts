import { debounceFrame } from '~/utils/debounceFrame';

import { root } from './root';
import { stateManager } from './state';

export const render = debounceFrame(() => {
  const { element, container } = root;

  if (!element || !container) return;

  container.innerHTML = element();
  stateManager.currentIndex = 0;
});
