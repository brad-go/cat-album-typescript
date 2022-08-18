import { stateManager } from './state';

export const useEffect = (callbackfn: Function, deps: any[]) => {
  const { states, currentIndex } = stateManager;

  let oldDeps = states[currentIndex];
  let hasChanged = true;

  if (oldDeps) {
    hasChanged = deps.some((d, index) => !Object.is(d, oldDeps[index]));
  }
  if (hasChanged) callbackfn();

  states[currentIndex] = deps;
  stateManager.currentIndex++;
};
