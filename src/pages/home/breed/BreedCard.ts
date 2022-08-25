import { useEvent } from '~/core';

import { Image } from '~/components';

import styles from './Breed.module.scss';

interface BreedCardProps {
  id: string;
  url: string;
  title: string;
  contents: string[];
  onClick: (e: Event) => void;
}

const BreedCard = ({ id, url, title, contents, onClick }: BreedCardProps) => {
  useEvent(`album-card${id}`, 'click', onClick);

  return `
    <li id=${id} class=${styles.item} data-event="album-card${id}">
      <a href="#">
        <div class=${styles.thumb}>
          ${Image({ src: url, alt: 'album-image' })}
        </div>
        <div class=${styles.text}>
          <h3 class=${styles.title}>${title}</h3>
          <div class=${styles.content}>
          ${contents.map((content) => `<p class=>${content}</p>`).join('')}
          </div>
        </div>
      </a>
    </li>
  `;
};

export default BreedCard;
