import type { Cat } from '~/types';

import { useEffect, useState } from '~/core';
import { getImageOfCats } from '~/api';

import ImageSlider from './image-slider';
import SliderNav from './slider-nav';

import styles from './MainSection.module.scss';

const ref: { current: number | null } = { current: null };
ref.current = 0;

const MainSection = () => {
  const [images, setImages] = useState<Cat[]>([]);
  const [current, setCurrent] = useState(0);

  const movePrev = () => {
    ref.current = (ref.current! < 1 ? images.length : ref.current) - 1;
    setCurrent(ref.current);
    // setCurrent((prev: number) => (prev < 1 ? images.length : prev) - 1);
  };

  const moveNext = () => {
    ref.current = (ref.current! + 1) % images.length;
    setCurrent(ref.current);
    // setCurrent((prev: number) => (prev + 1) % images.length);
  };

  const fetchCatImages = async () => {
    try {
      const images = await getImageOfCats(9, 'full');
      setImages(images);
    } catch (e) {
      throw new Error(`${(e as Error).message}`);
    }
  };

  useEffect(() => {
    fetchCatImages();
  }, []);

  useEffect(() => {
    // setIntreval이 아닌 setTimeout을 사용해야 해결이 가능했다.
    const timer = setTimeout(() => {
      // 리렌더링이 일어나면서 images를 아직 받아오지 못했다면 NaN이 current 값이 되므로
      if (images.length) {
        ref.current! = (ref.current! + 1) % images.length;
        // setCurrent((prev: number) => (prev + 1) % images.length);
        setCurrent(ref.current);
        console.log(ref.current);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [images, current, setCurrent]);

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
