# Vanilla TS, Webpack을 이용해 구현한 고양이 소개 사이트

<br />

### :rocket: [DEMO](https://cat-album-brad.netlify.app/)

## 목차

1. [프로젝트 소개](#speaking_head-1-프로젝트-소개)
2. [사용된 기술 스택](#wrench-2-사용된-기술-스택)
3. [저장소 사용 방법](#electric_plug-3-저장소-사용방법)
4. [핵심 기능 구현](#gear-4-핵심-기능-구현)
5. [디렉토리 구조](#open_file_folder-5-디렉토리-구조)

## :speaking_head: 1. 프로젝트 소개

> 바닐라 타입스크립트를 이용해 간단한 고양이 소개 사이트를 구현합니다.

- 개인 프로젝트
- 제작 기간: 2022.06 ~ 2022.08
- 제작 동기: 리액트가 아닌 TS로 직접 프로젝트를 설정해보고 싶다는 흥미가 생겨 진행하게 되었습니다.

[⬆️ Back to top](#목차)

<br />

## :wrench: 2. 사용된 기술 스택

![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) ![](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white) ![](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white) ![](https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white) ![](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white) ![](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white)

#### 2-1. Typescript

- 타입스크립트를 통해 개발 과정에서 발생할 수 있는 오류들을 더욱 쉽게 찾을 수 있었습니다.
- 코드의 의도를 더욱 명확히 나타내기 위해 사용했습니다.

#### 2-2. Webpack

- 구현한 각 모듈들을 번들링하기 위해 웹팩을 사용하게 되었습니다.

#### 2-3. Babel

- 바벨을 통해 ES6문법, 타입스크립트 파일 등을 브라우저가 인식할 수 있는 하위 javascript 버전의 파일로 트랜스파일링하기위해 사용했습니다.

#### 2-4. Sass와 CSS Module

- sass를 통해 스타일 작성의 생산성을 높이기 위해 사용했습니다.
- css module을 통해 클래스가 중첩되는 것을 방지하고, 모듈별로 스타일을 관리하기 위해 사용했습니다.

#### 2-5. ESLint, Prettier

- 일관된 코드 스타일로 작성해 유지보수를 용이하게 하기 위해 사용했습니다.

[⬆️ Back to top](#목차)

<br />

## :electric_plug: 3. 저장소 사용방법

#### 3-1. 프로젝트 실행

git clone하여 프로젝트를 내려받습니다.

```bash
git clone https://github.com/brad-go/cat-album-typescript.git
```

아래 커맨드로 패키지를 설치합니다.

```bash
yarn install
```

아래 커맨드로 프로젝트를 실행합니다.

```bash
yarn start
```

#### 3-2. Lint & Formatter

코드 퀄리티를 체크하고 싶다면 아래 커맨드를 사용합니다.

```bash
yarn lint:es
```

[⬆️ Back to top](#목차)

<br />

## :gear: 4. 핵심 기능 구현

### 4-1. Webpack 설정하기

Vanilla JS 프로젝트를 진행할 때, 다뤄본적이 있지만 웹팩을 타입 스크립트에 적용하며 혼자 다루기는 익숙하지 않았기에, 초기 설정에 꽤 오랜 시간을 들였습니다.

인터넷을 보고 같다 붙이는 것이 아닌 제대로된 이해가 있어야 했습니다. 그래서 웹팩 공식문서와 블로그들을 통해 각 설정이 어떤 역할을 하는지, 왜 필요한지에 대해 고민하고 제 프로젝트에 꼭 필요한 설정들을 할 수 있었던 것 같습니다.

테스트나 정말 아름답고 기능이 뛰어난 어플리케이션을 만드는 것이 목표가 아닌 **웹팩을 직접 설정하고, 리액트를 구현해보는 것**이 이번 프로젝트의 주 목적이었기에 더 세세하게 공부하려고 했던 것 같습니다.

### 4-2. 어플리케이션 진입점 구현하기

이전에 Vanilla JS 프로젝트를 진행하면서 코드가 굉장히 길어지고, 모듈 별로 분리하기 어려워 유지보수 및 디버깅에 어려움을 겪었던 적이 있습니다. 그래서 이러한 문제를 해결하고자 리액트와 같이 컴포넌트 형태로 개발을 하기 위해 리액트의 부분적인 기능을 구현해 프로젝트를 진행하기로 결정했습니다.

`create-react-app`과 같이 public 폴더 내에 `index.html`을 생성하고, 앱의 기반이 될 단일 요소를 추가했습니다.

```html
...
<html>
  <head>
    ...
  </head>
  <body>
    <div class="app"></div>
  </body>
</html>
```

위의 `app` 요소가 어플리케이션의 `root` 요소가 되며 이 요소 안에 하위 요소들을 추가하는 방식으로 구현했습니다.

### 4-3. 함수형으로 컴포넌트 구현하기

```ts
// render 메서드를 공통적으로 사용하기 위한 컴포넌트의 추상 클래스
abstract class Component {
  abstract element: HTMLElement;

  public render(parent: HTMLElement | Component): void {
    if (parent instanceof Component) {
      parent.element.appendChild(this.element);
    } else {
      parent.appendChild(this.element);
    }
  }
}

export default Component;
```

위처럼 `render` 메서드를 각 컴포넌트 가지고 렌더링되는 클래스 방식으로 구현할 수 있었지만, 함수형으로 컴포넌트를 작성하는 것이 코드의 가독성이 더 높다고 생각하여 `render` 함수 및 `리액트 hooks`를 구현할 필요가 있었습니다.

함수형으로 컴포넌트를 작성하기 위해서는 **`render` 메서드가 컴포넌트에서 분리될 필요**가 있었습니다.

```ts
// root.ts
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
```

`createRoot` 함수를 이용해 프로젝트 최상단 요소를 초기에 렌더링 해주고, 아래의 `render` 함수를 통해 상태가 변경될 때마다 렌더링되는 방식으로 구현해주었습니다.

```ts
export const render = debounceFrame(() => {
  const { element, container } = root;

  if (!element || !container) return;

  container.innerHTML = element();
  stateManager.currentIndex = 0;
});
```

이를 통해 아래와 같은 방식으로 컴포넌트를 개발할 수 있었습니다.

```ts
const Slider = ({ slideIndex, totalSlide, items }: SliderProps) => {
  // ...
  return `
    <div class="slider">...</div>
  `;
};

export default Slider;
```

### 4-4. react hooks 구현하기

#### useState 구현하기

```ts
// 어플리케이션의 모든 상태가 담길 객체
export const stateManager: StateManager = {
  states: [],
  currentIndex: 0,
};

export const useState = <T>(initialState: T) => {
  const { states, currentIndex } = stateManager;

  if (states.length === currentIndex) states.push(initialState);

  const state = states[currentIndex];

  const setState = (stateValue: T | SetState<T>) => {
    let newState: T;

    if (typeof stateValue === 'function') {
      newState = (stateValue as SetState<T>)(state);
    } else {
      newState = stateValue;
    }

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
```

클래스 컴포넌트였다면, 각 컴포넌트 클래스 내부에서 상태를 가지고 조절하겠지만, 함수형 컴포넌트에서는 컴포넌트 외부에서 상태를 다뤄야 했습니다. 그러므로 리액트의 `useState` 훅을 구현하기로 결정했습니다.

`stateManager`란 객체를 `useState` 훅 외부에 선언한 것은 상태가 한 번 사용되고 사라질 것이 아니라 지속적으로 유지되어야 했기 때문에외부에 객체 형식으로 선언할 필요가 있었습니다.

`JSON.stringify`를 통해 새로 상태 변경 요청이 들어올 때마다 비교를 하게되고, 다르다면 리렌더링이 일어나게 됩니다.

#### useEffect 구현하기

```ts
import { stateManager } from './state';

export const useEffect = (callbackfn: () => void, deps: any[]) => {
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
```

`useEffect` 훅은 각 deps에 전달받은 배열들의 각 값들이 이전 상태가 있는지 확인하고, 이전 상태와 현재 값을 비교후에 전달받은 콜백 함수를 실행하게 됩니다.

### 4-5. render 함수 제대로 구현하기

#### 렌더링 동작 이해하기

이번 프로젝트를 진행하면서 가장 크게 알게 된 것은 리액트의 `render` 함수의 동작 방식입니다. 렌더링이 어떻게 언제 일어나는지 직접 구현하면서 많이 알게 되었습니다.

```ts
export const render = debounceFrame(() => {
  const { element, container } = root;

  if (!element || !container) return;

  container.innerHTML = element();
  stateManager.currentIndex = 0;
});
```

앞서 보여드린 코드로도 상태가 복합적으로(한 컴포넌트가 아닌 여러 컴포넌트에서 동시에) 변경되기 전까지는 문제가 없었지만, 한계가 있었습니다. 위 코드대로 렌더링이 일어나면 한번 렌더링 될때마다 최상단의 `root`요소 아래의 **모든 요소가 렌더링이 일어나기 때문에 리액트와 같이 변경된 부분만 리렌더링이 일어나게 만들 필요**가 있었습니다.

#### 비교를 통해 변경된 요소만 찾아내기

**변경된 부분을 어떻게 비교하고 찾느냐**가 중요한 문제였는데, 꽤 고민을 많이 했던 것 같습니다. 함수형으로 컴포넌트를 구현했기 때문에 반환되는 코드가 `innerHTML`, 즉 `string`이 였기 때문에 비교를 할 수 없었기 때문입니다.

결과적으로 **문자열을 javascript가 html요소로 인식할 수 있도록 변경**해줄 필요가 있었고, 저의 경우 `DOMParser`를 통해 문제를 해결할 수 있었습니다.

```ts
const diffELements = (element: string, container: Element) => {
  const parser = new DOMParser();
  // 입력받은 문자열을 파싱해서 html요소로 만들기
  const newElements: Element[] = Array.from(
    parser.parseFromString(element, 'text/html').body.children,
  );

  const newContainer: Node = container.cloneNode();
  newElements.forEach((element) => newContainer.appendChild(element));

  // 각 요소들을 재귀적으로 탐색하며 변경된 부분을 찾아 업데이트
  updateElement(document.body, container, newContainer as Element);
};
```

렌더링 시마다 diffElements함수가 실행되도록 하며, 문자열을 html요소로 파싱해준 뒤에, updateElement가 변경점을 찾고 변경된 요소를 업데이트 해줍니다.

```ts
const updateElement = (
  parent: Element,
  oldNode: Element,
  newNode: Element,
  index = 0,
) => {
  // 변경으로 인해 기존 요소가 사라져야 할 때,
  if (oldNode && !newNode) {
    return (oldNode as Element).remove();
  }

  // 변경으로 인해 새로운 요소가 추가될 때,
  if (!oldNode && newNode) {
    return parent.appendChild(newNode);
  }

  // 요소 내부의 innerText등으로 둘 다 text타입일 경우 요소 내부의 텍스트만 변경
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

  // 같은 요소인데, 클래스나 다른 상태가 변경될 경우 최신화해주기
  updateAttributes(oldNode, newNode);

  const oldChildren = [...oldNode.childNodes];
  const newChildren = [...newNode.childNodes];
  const maxLength = Math.max(oldChildren.length, newChildren.length);

  // 변경된 돔 트리 내에서 각 하위 요소들에게 재귀적으로 실행
  for (let i = 0; i < maxLength; i++) {
    updateElement(
      oldNode,
      oldChildren[i] as Element,
      newChildren[i] as Element,
    );
  }
};
```

### 4-6. 스크롤 이벤트 구현하기

```ts
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
```

스크롤 시에 부드럽게 떠오르는 듯한 애니메이션 효과를 주기 위해 `useScroll` 커스텀 훅을 구현했습니다. `IntersectionObserver`를 통해 화면에 노출된 정도를 통해 정해 놓은 스타일을 적용하는 방식으로 구현할 수 있었습니다.

[⬆️ Back to top](#목차)

<br />

## :open_file_folder: 5. 디렉토리 구조

```bash
.
├── api
├── components
│   ├── button
│   ├── image
│   ├── progress-bar
│   └── section
├── constatns
├── core
├── pages
│   └── home
│       ├── breed
│       ├── fact
│       ├── footer
│       ├── investment
│       ├── main
│       │   ├── image-slider
│       │   ├── phrase-slider
│       │   └── slider-nav
│       │       └── pager
│       ├── news
│       │   └── carousel
│       └── service
│           ├── progress-bar
│           └── slider
├── styles
├── types
└── utils
```

[⬆️ Back to top](#목차)
