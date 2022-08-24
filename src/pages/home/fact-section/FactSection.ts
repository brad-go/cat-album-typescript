import { FACTS } from '~/constatns/fact';

import styles from './FactSection.module.scss';

const FactSection = () => {
  const handleClick = (e: Event) => {
    console.log('not implemented...');
  };

  return `
    <div class=${styles.container}>
      <header class=${styles.header}>
        <h2 class=${styles.title}>
          고양이는 사실 이런 동물입니다. <br />
          알고 계셨나요?
        </h2>
        <a href="#" class=${styles.more}>자세히 보기</a>
      </header>
      <ul class=${styles.list}>
        ${FACTS.map(({ icon, eg, ko, sub }, id) =>
          FactItem({ id, icon, eg, ko, sub, onClick: handleClick }),
        ).join('')}
      </ul>
    </div>
  `;
};

export default FactSection;

import { Image } from '~/components';
import { useEvent } from '~/core';

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
