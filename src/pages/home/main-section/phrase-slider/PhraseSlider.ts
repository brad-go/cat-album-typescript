import { PHRASES } from '~/constatns';

import PhraseItem from './PhraseItem';

import styles from './PhraseSlider.module.scss';

interface PhraseSliderProps {
  current: number;
  slideCount: number;
}

const PhraseSlider = ({ current, slideCount }: PhraseSliderProps) => {
  const setTrackWidth = (slideCount: number) => {
    return slideCount * window.innerWidth;
  };

  const setPosition = (current: number) => {
    return current * window.innerWidth * -1;
  };

  return `
    <div class=${styles.container}>
      <div class=${styles.track} 
        style="
          width: ${setTrackWidth(slideCount)}px;
          transform: translateX(${setPosition(current)}px);
        "
      >
        ${PHRASES.map(
          ({ id, title, contents }) => `${PhraseItem({ id, title, contents })}`,
        ).join('')}
      </div>
    </div>
  `;
};

export default PhraseSlider;
