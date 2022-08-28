import { NEWS } from '~/constatns';

import Carousel from './carousel';

import styles from './News.module.scss';

const News = () => {
  return `
    <div class=${styles.container}>
      <h2 class=${styles.header}>NEWS</h2>
      ${Carousel({ items: NEWS })}
    </div>
  `;
};

export default News;
