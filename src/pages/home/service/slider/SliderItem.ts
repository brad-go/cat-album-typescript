import { Image, Button } from '~/components';

import styles from './Slider.module.scss';

export interface SliderItemProps {
  id: number;
  title: string;
  contents: string[];
  url: string;
  slideWidth: number;
  isActive: boolean;
}

const SliderItem = ({
  id,
  title,
  contents,
  url,
  slideWidth,
  isActive,
}: SliderItemProps) => {
  return `
    <div id=${id} class="${styles.slide}" style="width: ${slideWidth}px">
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
