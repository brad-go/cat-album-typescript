import type { Cat } from '~/types';

import { useState, useEffect } from '~/core';
import { getImageOfCats } from '~/api';
import { PHRASES } from '~/constatns';

import Slider from './slider';
import ProgressBar from './progress-bar';

import styles from './Service.module.scss';

let timer: string | number | NodeJS.Timeout | undefined;

const Service = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [slideIndex, setSlideIndex] = useState(0);

  const fetchCatImages = async () => {
    try {
      const response = await getImageOfCats(4);
      const newCats = response.map((res: Cat, index: number) => ({
        ...res,
        title: PHRASES[index].title,
        contents: PHRASES[index].contents,
      }));
      setCats(newCats);
    } catch (e) {
      throw new Error(`${(e as Error).message}`);
    }
  };

  const moveSlide = (e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const index = Number(target.id);

    setSlideIndex(index);
    clearInterval(timer);
  };

  const moveNext = () => {
    setSlideIndex((prev: number) => (prev + 1) % cats.length);
    clearInterval(timer);
  };

  useEffect(() => {
    fetchCatImages();
  }, []);

  useEffect(() => {
    timer = setInterval(() => {
      if (cats.length) moveNext();
    }, 5000);
  }, [cats, slideIndex]);

  return `
    <div class=${styles.container}>
      <header class=${styles.header}>
        <h2 class=${styles.title}>
          고양이는<br />
          어떤 동물일까?
        </h2>
      </header>
      <div class=${styles.slider}>
        ${Slider({ slideIndex, totalSlide: cats.length, items: cats })}
        ${ProgressBar({
          slideIndex,
          totalSlide: cats.length,
          onClick: moveSlide,
        })}
      </div>
    </div>
  `;
};

export default Service;
