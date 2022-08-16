import { Component } from "~/components";
import styles from "./home.module.scss";

class Home extends Component {
  readonly element: HTMLElement;

  constructor() {
    super();
    this.element = document.createElement("div");
    this.element.className = `${styles.home}`;
    this.element.innerHTML = "<h1>Home</h1>";
  }
}

export default Home;
