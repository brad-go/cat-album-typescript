import { render } from './render';

export interface StateManager {
  states: any[];
  currentIndex: number;
}

export const stateManager: StateManager = {
  states: [],
  currentIndex: 0,
};

export const useState = <T>(initialState: T) => {
  const { states, currentIndex } = stateManager;

  if (states.length === currentIndex) states.push(initialState);

  const state = states[currentIndex];

  const setState = (newState: T) => {
    if (isEquivalent(state, newState)) return;

    states[currentIndex] = newState;
    render();
  };

  const isEquivalent = (state: T, newState: T) => {
    return JSON.stringify(state) === JSON.stringify(newState);
  };

  stateManager.currentIndex += 1;

  return [state, setState];
};
