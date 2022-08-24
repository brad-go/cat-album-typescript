import Bar from './Bar';

import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  slideIndex: number;
  totalSlide: number;
  onClick: (e: Event) => void;
}

const ProgressBar = ({ slideIndex, totalSlide, onClick }: ProgressBarProps) => {
  return `
    <div class=${styles.container}>
      ${new Array(totalSlide)
        .fill(null)
        .map((_, id) => Bar({ id, slideIndex, onClick }))
        .join('')}
    </div>
  `;
};

export default ProgressBar;
