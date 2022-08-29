import { Image, Button } from '~/components';
import { ICONS } from '~/constatns';

import styles from './Footer.module.scss';

const Footer = () => {
  return `
    <footer class=${styles.footer}>
      <div class=${
        styles.top_btn
      } onclick="window.scrollTo({top: 0, behavior: 'smooth'})"></div>
      <div class=${styles.footer_dots}>
        <div>cats</div>
        <div></div>
        <div></div> 
      </div>
      <div class=${styles.wrapper}>
        <div class=${styles.content}>
          <ul class=${styles.policy}>
            <li>개인정보처리방침</li>
            <li>내부정보관리규정</li>
            <li>윤리경영</li>
          </ul>
          <div>
            <ul class=${styles.contact_text}>
              <li>Email help@cats.co.kr</li>
              <li>Tel 02. 1234. 1234</li>
              <li>Fax 02. 1234. 1234</li>
            </ul>
            <ul class=${styles.contact_icon}>
              ${ICONS.map(
                (icon) => `
                <li class=${styles.sns}>
                  <a>${Image({ src: icon, alt: 'facebook' })}</a>
                </li>
              `,
              ).join('')}
            </ul>
          </div>
          <div>
            <ul class=${styles.contact_text}>
              <li><b>(주)고양이는귀여워</b> 대표이사 홍길동</li>
              <li><em>(우) 01234 서울시 강남구 강남대로 11길 1(역삼동, 역삼빌딩 101호)</em></li>
            </ul>
            <ul class=${styles.contact_text_small}>
              <li>사업자 등록번호 111-11-11111</li>
              <li>고양이정보제공사업 서울강남 제 0000-0호</li>
            </ul>
          </div>
        </div>
        <div class=${styles.footer_right}>
          <p>고양이와 사람을 잇는<br />행복 Bridge</p>
          <span class=${
            styles.copyright
          }>Copyrightⓒ2022CatsCHR Co., Ltd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  `;
};

export default Footer;
