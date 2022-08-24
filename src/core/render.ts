import { debounceFrame } from '~/utils/debounceFrame';

import { root } from './root';
import { stateManager } from './state';

export const render = debounceFrame(() => {
  const { element, container } = root;

  if (!element || !container) return;

  diffELements(element(), container);

  stateManager.currentIndex = 0;
});

const diffELements = (element: string, container: Element) => {
  const parser = new DOMParser();
  const newElements: Element[] = Array.from(
    parser.parseFromString(element, 'text/html').body.children,
  );

  const newContainer: Node = container.cloneNode();
  newElements.forEach((element) => newContainer.appendChild(element));

  updateElement(document.body, container, newContainer as Element);
};

const updateElement = (
  parent: Element,
  oldNode: Element,
  newNode: Element,
  index = 0,
) => {
  if (oldNode && !newNode) {
    return (oldNode as Element).remove();
  }

  if (!oldNode && newNode) {
    return parent.appendChild(newNode);
  }

  // 둘 다 text타입일 경우
  if (oldNode instanceof Text && newNode instanceof Text) {
    if (oldNode.nodeValue === newNode.nodeValue) return;

    oldNode.nodeValue = newNode.nodeValue;
    return;
  }

  // 둘이 서로 태그 명이 다른 경우
  if (oldNode.nodeName !== newNode.nodeName) {
    oldNode.remove();
    parent.appendChild(newNode);
    return;
  }

  updateAttributes(oldNode, newNode);

  const oldChildren = [...oldNode.childNodes];
  const newChildren = [...newNode.childNodes];
  const maxLength = Math.max(oldChildren.length, newChildren.length);

  for (let i = 0; i < maxLength; i++) {
    updateElement(
      oldNode,
      oldChildren[i] as Element,
      newChildren[i] as Element,
    );
  }
};

const updateAttributes = (oldNode: Element, newNode: Element) => {
  const oldProps = [...oldNode.attributes];
  const newProps = [...newNode.attributes];

  // 달라지거나 추가된 props 반영
  for (const { name, value } of newProps) {
    if (value === oldNode.getAttribute(name)) continue;
    oldNode.setAttribute(name, value);
  }

  // 없어진 props를 attributes에서 제거
  for (const { name } of oldProps) {
    if (newNode.getAttribute(name) !== undefined) continue;
    oldNode.removeAttribute(name);
  }
};
