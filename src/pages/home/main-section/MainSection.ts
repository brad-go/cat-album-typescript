import type { Cat } from '~/types';

import { useEffect, useState } from '~/core';
import { getImageOfCats } from '~/api';

import ImageSlider from './image-slider';
import SliderNav from './slider-nav';

import styles from './MainSection.module.scss';

let timer: string | number | NodeJS.Timeout | undefined;

const MainSection = () => {
  const [images, setImages] = useState<Cat[]>([]);
  const [current, setCurrent] = useState(0);

  const fetchCatImages = async () => {
    try {
      const images = await getImageOfCats(9, 'full');
      setImages(images);
    } catch (e) {
      throw new Error(`${(e as Error).message}`);
    }
  };

  const movePrev = () => {
    setCurrent((prev: number) => (prev < 1 ? images.length : prev) - 1);
    // 렌더링 될 때마다 타이머가 추가되므로 각 timer를 없애준다.
    stopTimerInterval();
  };

  const moveNext = () => {
    setCurrent((prev: number) => (prev + 1) % images.length);
    stopTimerInterval();
  };

  const startTimerInterval = () => {
    return setInterval(() => {
      if (images.length) {
        moveNext();
      }
    }, 3000);
  };

  const stopTimerInterval = () => {
    clearInterval(timer);
  };

  useEffect(() => {
    fetchCatImages();
  }, []);

  useEffect(() => {
    // timer 시작
    timer = startTimerInterval();
  }, [images, current]);

  return `
    <div class=${styles.main}>
      ${ImageSlider({ images, current })}
      ${SliderNav({
        currentPage: current + 1,
        totalPage: images.length,
        movePrev,
        moveNext,
      })}
    </div>
    `;
};

export default MainSection;
