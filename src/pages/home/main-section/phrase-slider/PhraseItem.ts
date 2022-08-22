import { PHRASES } from '~/constatns/phrase';

import styles from './PhraseSlider.module.scss';

interface PhraseItemProps {
  id: number;
  title: string;
  content: string;
}

const PhraseItem = ({ id, title, content }: PhraseItemProps) => {
  return `
    <div id=${id} class="${styles.item}">
      <div class=${styles.phrase}>
        ${
          id !== PHRASES.length
            ? `<p class=${styles.title}>${title}</p>
              <p class=${styles.content}>${content}</p>`
            : `<p class=${styles.text}>${content}</p>`
        }
      </div>
    </div>
  `;
};

export default PhraseItem;
