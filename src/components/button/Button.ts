import { useEvent } from '~/core';

import { removeWhiteSpaceOfString } from '~/utils';

interface ButtonProps {
  children: string;
  onClick: (e: MouseEvent) => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  useEvent(removeWhiteSpaceOfString(children), 'click', onClick);

  return `
      <button data-event=${removeWhiteSpaceOfString(
        children,
      )}>${children}</button>
    `;
};

export default Button;
