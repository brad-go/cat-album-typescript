import { fillZero } from '~/utils';
import { LEFT_ARROW, RIGHT_ARROW } from '~/constatns';

import { Button, Image } from '~/components';

import styles from './Pager.module.scss';

interface PagerProps {
  currentPage: number;
  totalPage: number;
  movePrev: (e: MouseEvent) => void;
  moveNext: (e: MouseEvent) => void;
}

const Pager = ({ currentPage, totalPage, movePrev, moveNext }: PagerProps) => {
  return `
    <div class=${styles.pager}>
      ${Button({
        children: Image({ src: LEFT_ARROW, alt: 'left-arrow' }),
        onClick: movePrev,
      })}
      <span class=${styles.current}>${fillZero(currentPage, 2, 0)}</span>
      &nbsp; / &nbsp; 
      <span class=${styles.total}>${fillZero(totalPage, 2, 0)}</span>
      ${Button({
        children: Image({ src: RIGHT_ARROW, alt: 'right-arrow' }),
        onClick: moveNext,
      })}
    </div>
  `;
};

export default Pager;
