import type { Cat } from '~/types';

import { Image } from '~/components/image';

import styles from './Home.module.scss';

interface HomeProps {
  catImage: Cat;
}

const Home = ({ catImage }: HomeProps) => {
  const { url, id } = catImage;

  return `
    <div class=${styles.home}>
      <h1>Home</h1>
      ${Image({ src: url, alt: id })}      
    </div>
  `;
};

export default Home;
