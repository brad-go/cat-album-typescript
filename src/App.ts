import { Home } from "~/pages/home";
import { Component } from "~/components";

import { init } from "./router";

import { INITIAL_CAT_IMAGE } from "./constants";

import type { Target, Cat } from "~/types";

import styles from "~/styles/global.module.scss";

interface HomeState {
  catImage: Cat;
}

class App extends Component {
  readonly element: HTMLDivElement;
  private state: HomeState = { catImage: INITIAL_CAT_IMAGE };

  constructor({ $target }: Target<HTMLDivElement>) {
    super();

    this.element = $target;
    this.element.className = `${styles}`;

    init(this.route);
    this.route();
  }

  setState(nextState: { catImage: Cat }) {
    this.state = nextState;
    this.route();
  }

  private route() {
    this.element.innerHTML = "";

    const { pathname } = location;

    if (pathname === "/") {
      new Home().render(this.element);
    }
  }
}

export default App;
