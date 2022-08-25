import { Image } from '~/components';
import { useEvent } from '~/core';

import styles from './Fact.module.scss';

interface FactItemProps {
  id: number;
  icon: string;
  eg: string;
  ko: string;
  sub: string;
  onClick: (e: Event) => void;
}

const FactItem = ({ id, icon, eg, ko, sub, onClick }: FactItemProps) => {
  useEvent(`fact${id}`, 'click', onClick);

  return `
    <li id=${id} class=${styles.item} data-event="fact${id}">
      <div class=${styles.icon}>
        ${Image({ src: icon, alt: 'cat-icon' })}
      </div>
      <h3 class=${styles.eg}>${eg}</h3>
      <h4 class=${styles.ko}>${ko}</h4>
      <p class=${styles.sub}>${sub}</p>
    </li>
  `;
};

export default FactItem;
