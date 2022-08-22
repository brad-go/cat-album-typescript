import { ProgressBar } from '~/components';

import Pager from './pager';

import styles from './SliderNav.module.scss';

interface SliderNavProps {
  currentPage: number;
  totalPage: number;
  movePrev: (e: MouseEvent) => void;
  moveNext: (e: MouseEvent) => void;
}

const SliderNav = ({
  currentPage,
  totalPage,
  movePrev,
  moveNext,
}: SliderNavProps) => {
  return `
    <nav class=${styles.nav}>
      ${ProgressBar({
        width: 235,
        height: 2,
        color: '#4876ef',
        isActive: true,
      })}
      ${Pager({
        currentPage,
        totalPage,
        movePrev,
        moveNext,
      })}
    </nav>
  `;
};

export default SliderNav;
