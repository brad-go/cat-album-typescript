import { useScroll } from '~/core';
import { NEWS } from '~/constatns';

import Carousel from './carousel';

import styles from './News.module.scss';
import '~/styles/animation.scss';

const News = () => {
  useScroll('news');

  return `
    <div class="${styles.container} ${styles.animated}" data-scroll="news">
      <h2 class=${styles.header}>NEWS</h2>
      ${Carousel({ items: NEWS })}
    </div>
  `;
};

export default News;
