import { PHRASES } from '~/constatns';

import styles from './PhraseSlider.module.scss';

interface PhraseItemProps {
  id: number;
  title: string;
  contents: string[];
}

const PhraseItem = ({ id, title, contents }: PhraseItemProps) => {
  return `
    <div id=${id} class="${styles.item}">
      <div class=${styles.phrase}>
        <h3 class=${styles.title}>${title}</h3>
        ${contents.map(
          (content, idx) => `
          <p class=${id === PHRASES.length ? styles.text : styles.content} 
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
