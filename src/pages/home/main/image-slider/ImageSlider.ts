import type { Cat } from '~/types';

import SlideImage from './SlideImage';

import styles from './ImageSlider.module.scss';

interface ImageSliderProps {
  images: Cat[];
  current: number;
}

const ImageSlider = ({ images, current }: ImageSliderProps) => {
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
