import type { Cat } from '~/types';

import { useEffect, useState } from '~/core';
import { getImageOfCats } from '~/api';

import ImageSlider from './image-slider';
import PhraseSlider from './phrase-slider';
import SliderNav from './slider-nav';

import styles from './Main.module.scss';

let timer: string | number | NodeJS.Timeout | undefined;

const Main = () => {
  const [images, setImages] = useState<Cat[]>([]);
  const [current, setCurrent] = useState(0);

  const fetchCatImages = async () => {
    try {
      const images = await getImageOfCats(5, 'full');
      setImages(images.slice(0, 5));
    } catch (e) {
      throw new Error(`${(e as Error).message}`);
    }
  };

  const movePrev = () => {
    setCurrent((prev: number) => (prev < 1 ? images.length : prev) - 1);
    // 렌더링 될 때마다 타이머가 추가되므로 각 timer를 없애준다.
    clearInterval(timer);
  };

  const moveNext = () => {
    setCurrent((prev: number) => (prev + 1) % images.length);
    clearInterval(timer);
  };

  useEffect(() => {
    fetchCatImages();
  }, []);

  useEffect(() => {
    timer = setInterval(() => {
      if (images.length) {
        moveNext();
      }
    }, 3000);
  }, [images, current]);

  return `
    <main class=${styles.main}>
      ${ImageSlider({ images, current })}
      ${PhraseSlider({ current, slideCount: images.length })}
      ${SliderNav({
        currentPage: current + 1,
        totalPage: images.length,
        movePrev,
        moveNext,
      })}
    </main>
    `;
};

export default Main;
