import { render } from './render';

interface Componenet {
  (): string;
}

interface Root {
  element: Componenet | null;
  container: Element | null;
}

export const root: Root = {
  element: null,
  container: null,
};

export const createRoot = (element: Componenet, container: Element) => {
  root.element = element;
  root.container = container;

  render();
};
