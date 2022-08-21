import type { Cat } from '~/types';

import { useState, useEffect } from '~/core';
import SlideImage from './SlideImage';

import styles from './ImageSlider.module.scss';

interface ImageSliderProps {
  images: Cat[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    // setIntreval이 아닌 setTimeout을 사용해야 해결이 가능했다.
    const timer = setTimeout(() => {
      // 리렌더링이 일어나면서 images를 아직 받아오지 못했다면 NaN이 current 값이 되므로
      if (images.length) {
        setCurrent((prev: number) => (prev + 1) % images.length);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [images, current]);

  return `
    <div class="${styles.background}">
      ${images
        .map(({ url }: Cat, id: number) =>
          SlideImage({ id, url, isActive: id === current }),
        )
        .join('')}
    </div>
  `;
};

export default ImageSlider;
