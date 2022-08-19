import type { Cat } from '~/types';

import { Image, Button } from '~/components';

import styles from './Home.module.scss';

interface HomeProps {
  catImage: Cat;
  onClick: (e: MouseEvent) => void;
}

const Home = ({ catImage, onClick }: HomeProps) => {
  return `
    <div class=${styles.home}>
      <h1>Home</h1>
      ${Image({ src: catImage.url, alt: catImage.id })}   
      ${Button({
        children: '다른 고양이 사진 보기',
        onClick,
      })}   
    </div>
  `;
};

export default Home;
