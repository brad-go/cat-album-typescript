import { useEvent } from '~/core';

import styles from './ProgressBar.module.scss';

interface BarProps {
  id: number;
  slideIndex: number;
  onClick: (e: Event) => void;
}

const Bar = ({ id, slideIndex, onClick }: BarProps) => {
  useEvent(`bar${id}`, 'click', onClick);

  return `
    <div id=${id} class=${styles.wrapper} data-event="bar${id}">
      <div class="${
        id === slideIndex ? `${styles.bar} ${styles.active}` : styles.bar
      }">
      </div>
    </div>
  `;
};

export default Bar;
