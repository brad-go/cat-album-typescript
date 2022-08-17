import Component from "../component";
import styles from "./button.module.scss";

interface ButtonProps {
  children: string;
}

class Button extends Component {
  readonly element: HTMLElement;

  constructor({ children }: ButtonProps) {
    super();
    this.element = document.createElement("button");
    this.element.className = styles.button;
    this.element.innerHTML = children;

    this.element.addEventListener("click", (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      this.onClick();
    });
  }

  /**
   * 상위 컴포넌트에서 버튼 클릭 시 일어날 때 이벤트를 정의
   */
  onClick(): void {
    throw new Error(
      "The click handler has not been defined in a Button component"
    );
  }
}

export default Button;
