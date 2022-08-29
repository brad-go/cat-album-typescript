import type { Cat } from '~/types';

import { useState, useEffect, useScroll } from '~/core';
import { getImageOfCatsByBreeds } from '~/api';
import { BREEDS } from '~/constatns';

import BreedCard from './BreedCard';

import styles from './Breed.module.scss';
import '~/styles/animation.scss';

interface CatBreeds extends Cat {
  title: string;
  contents: string[];
}

const Breed = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const handleClick = (e: Event) => {
    console.log(e.currentTarget);
  };

  const fetchCatImages = async () => {
    try {
      const promises = BREEDS.map(({ id }) => getImageOfCatsByBreeds(id));
      const response: Cat[] = (await Promise.all(promises)).flat();
      const cats = response.map((res, idx) => ({ ...res, ...BREEDS[idx] }));

      setCats([...cats]);
    } catch (e) {
      throw new Error((e as Error).message);
    }
  };

  useEffect(() => {
    fetchCatImages();
  }, []);

  useScroll('breed');

  return `
    <div class="${styles.container} ${styles.animated}" data-scroll="breed">
      <h2 class=${styles.header}>CAT BREEDS</h2>
      <ul class=${styles.list}>
        ${cats
          .map(({ id, url, title, contents }: CatBreeds) =>
            BreedCard({ id, url, title, contents, onClick: handleClick }),
          )
          .join('')}
      </ul>
    </div>
  `;
};

export default Breed;
