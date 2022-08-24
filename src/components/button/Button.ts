import { useEffect, useEvent } from '~/core';

import { removeWhiteSpaceOfString } from '~/utils';

import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  onClick: (e: Event) => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  useEvent(removeWhiteSpaceOfString(children), 'click', onClick);

  return `
      <button 
        class=${styles.button}
        data-event="${removeWhiteSpaceOfString(children)}">
        ${children}
      </button>
    `;
};

export default Button;
