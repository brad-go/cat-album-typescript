import { Image, Button } from '~/components';

import styles from './Slider.module.scss';

export interface SliderItemProps {
  id: number;
  title: string;
  contents: string[];
  url: string;
  isActive: boolean;
}

const SliderItem = ({
  id,
  title,
  contents,
  url,
  isActive,
}: SliderItemProps) => {
  const getSlideWidth = () => {
    const PADDING = 95;
    return window.innerWidth - PADDING;
  };

  return `
    <div id=${id} class="${styles.slide}" style="width: ${getSlideWidth()}px">
      <div class=${styles.imageWrapper}>
        ${Image({ src: url, alt: `slide ${id}` })}
      </div>
      <div class="${styles.phrase} ${isActive ? styles.active : ''}">
        <h3 class=${styles.title}>${title}</h3>
        <div class=${styles.content}>
          ${contents.map((content) => `<p>${content}</p>`).join('')}
        </div>
        ${Button({
          children: '자세히 보기',
          onClick: () => (window.location.href = url),
        })}
      </div>
    </div>
  `;
};

export default SliderItem;
