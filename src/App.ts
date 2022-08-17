import { Home } from "~/pages/home";
import { Component } from "~/components";

import { init } from "./router";
import { getImageOfCats } from "~/api";
import { INITIAL_CAT_IMAGE } from "./constants";

import type { Target, Cat } from "~/types";

interface HomeState {
  catImage: Cat;
}

class App extends Component {
  readonly element: HTMLDivElement;
  private state: HomeState = { catImage: INITIAL_CAT_IMAGE };

  constructor({ $target }: Target<HTMLDivElement>) {
    super();

    this.element = $target;

    init(this.route);
    this.route();
    // this.fetchCatImages();
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

  private async fetchCatImages() {
    try {
      const catImage = await getImageOfCats();

      this.setState({ ...this.state, catImage });
    } catch (e) {
      throw new Error(`렌더링 실패 ${(e as Error).message}`);
    }
  }
}

export default App;
