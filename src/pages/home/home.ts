import { Component } from "~/components";

import styles from "./home.module.scss";

class Home extends Component {
  readonly element: HTMLElement;

  constructor() {
    super();
    this.element = document.createElement("div");
    this.element.className = `${styles.home}`;
  }

  render(parent: HTMLElement) {
    this.element.innerHTML = "";
    this.element.innerHTML = "<h1>Home</h1>";
    super.render(parent);
  }
}

export default Home;
