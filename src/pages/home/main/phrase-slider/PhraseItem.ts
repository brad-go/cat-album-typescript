import { PHRASES } from '~/constatns';

import styles from './PhraseSlider.module.scss';

interface PhraseItemProps {
  id: number;
  title: string;
  contents: string[];
  isActive: boolean;
}

const PhraseItem = ({ id, title, contents, isActive }: PhraseItemProps) => {
  return `
    <div id=${id} class="${styles.item}">
      <div class="${styles.phrase} ${isActive ? styles.active : ''}">
        <h3 class=${styles.title}>${title}</h3>
        ${contents.map(
          (content, idx) => `
          <p class="${id === PHRASES.length - 1 ? styles.text : styles.content}"
            style="animation-delay: ${(idx + 1) * 200}ms">
            ${content}
          </p>
        `,
        )}
      </div>
    </div>
  `;
};

export default PhraseItem;
