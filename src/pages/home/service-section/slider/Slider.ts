import SliderItem, { SliderItemProps } from './SliderItem';

import styles from './Slider.module.scss';

interface SliderProps {
  slideIndex: number;
  totalSlide: number;
  items: SliderItemProps[];
}

const Slider = ({ slideIndex, totalSlide, items }: SliderProps) => {
  const PADDING = 95;
  const SLIDE_WIDTH = window.innerWidth - PADDING;

  const getTrackWidth = (totalSlide: number) => {
    return totalSlide * SLIDE_WIDTH;
  };

  const getTrackPosition = (slideIndex: number) => {
    return slideIndex * SLIDE_WIDTH * -1;
  };

  return `
    <div class=${styles.container}>
      <div class=${styles.track} style="
        width: ${getTrackWidth(totalSlide)}px;
        transform: translateX(${getTrackPosition(slideIndex)}px);
      ">
        ${items
          .map(({ title, contents, url }, id) =>
            SliderItem({
              id,
              title,
              contents,
              url,
              isActive: id === slideIndex,
            }),
          )
          .join('')}
      </div>
    </div>
  `;
};

export default Slider;
