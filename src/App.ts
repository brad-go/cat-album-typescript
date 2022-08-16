import Home from "~/pages/home/home";
import { Component } from "~/components";

import { init } from "./router";

import type { Target } from "~/types";

import styles from "~/styles/global.module.scss";

class App extends Component {
  readonly element: HTMLDivElement;

  constructor({ $target }: Target<HTMLDivElement>) {
    super();

    this.element = $target;
    this.element.className = `${styles}`;

    init(this.route);
    this.route();
  }

  private route() {
    const { pathname } = location;

    if (pathname === "/") {
      new Home().render(this.element);
    }
  }
}

export default App;
