import { useScroll } from '~/core';
import { Image, Button } from '~/components';

import styles from './Investment.module.scss';
import '~/styles/animation.scss';

export const ARROW_UP =
  'https://www.saraminhr.co.kr/resources/image/sub/up.png';

const Investment = () => {
  useScroll('investment');

  const handleClick = () => {
    console.log('not implementes...');
  };

  return `
    <div 
      class="${styles.container} ${styles.animated}" 
      data-scroll="investment"
    >
      <div class=${styles.stock_data}>
        <h4 class=${styles.stock_title}>
          <b>투자정보</b>
          <span>고양이 주식회사 3877645</span>
        </h4>
        <span class=${styles.stock_price}>
          <b>
            ${Image({ src: ARROW_UP, alt: 'up' })}
            32,750
          </b>
          won
        </span>
        <span class=${styles.stock_compare}>
          전일 대비
          ${Image({ src: ARROW_UP, alt: 'up' })}
          +200
        </span>
        <span class=${styles.red}>(+0.61%)</span>
        <span class=${styles.date}>${new Date().toLocaleString('ko-kr')}</span>
      </div>
      ${Button({ children: '투자정보 보기', onClick: handleClick })}
    </div>
  `;
};

export default Investment;
