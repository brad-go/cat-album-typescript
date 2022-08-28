import type { NewsType } from '~/constatns/news';

import { useEffect, useState } from '~/core';
import { Button } from '~/components';

import Item from './Item';

import styles from './Carousel.module.scss';

interface CarouselProps {
  items: NewsType[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animation, setAnimation] = useState<boolean>(true);

  const slides = document.querySelectorAll(`.${styles.slide}`);
  const slideWidth = document.querySelector(`.${styles.slide}`)?.clientWidth!;
  const slideCount = slides.length;

  const MARGIN = 60;

  const movePrev = () => {
    setCurrentIndex((prev: number) => (prev - 1) % slideCount);
  };

  const moveNext = () => {
    setCurrentIndex((prev: number) => (prev + 1) % slideCount);
  };

  const setSlides = () => {
    return [...items, ...items, ...items];
  };

  const setInitialPos = () => {
    return (slideWidth + MARGIN) * items.length;
  };

  const setTrackWidth = () => {
    return (slideWidth + MARGIN) * slideCount;
  };

  const setTrackPosition = () => {
    return (slideWidth + MARGIN) * currentIndex * -1;
  };

  const setItemWidth = () => {
    const DESKTOP = 1024;
    const screenSize = window.innerWidth;
    const totalWidth = document.querySelector(
      `.${styles.carousel}`,
    )?.clientWidth;

    if (totalWidth && screenSize < DESKTOP) {
      return totalWidth / 2 - MARGIN;
    } else if (totalWidth && screenSize >= DESKTOP) {
      return totalWidth / 4 - MARGIN;
    }

    return 0;
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setInitialPos();
    });
  }, []);

  useEffect(() => {
    if (currentIndex === -3) {
      setTimeout(() => {
        setAnimation(false);
        setCurrentIndex(1);
      }, 300);
    }
    if (currentIndex === 3) {
      setTimeout(() => {
        setAnimation(false);
        setCurrentIndex(-1);
      }, 300);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (animation) return;

    setTimeout(() => {
      setAnimation(true);
    }, 100);
  }, [animation]);

  return `
    <div class=${styles.carousel_arrow}>
      ${Button({
        children: 'Prev',
        onClick: movePrev,
      })}
      ${Button({
        children: 'Next',
        onClick: moveNext,
      })}
    </div>
    <div class=${styles.carousel}>
      <ul 
        id="carouselTrack" 
        class="${styles.track} ${animation ? styles.animated : ''}"
        style="
          width: ${setTrackWidth()}px;
          left: ${setTrackPosition()}px;
          transform: translateX(-${setInitialPos()}px);
        "
      >
        ${setSlides()
          .map(({ section, title, date, link }, id) =>
            Item({ id, width: setItemWidth(), section, title, date, link }),
          )
          .join('')}
      </ul>
    </div>
  `;
};

export default Carousel;
