import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  width: number;
  height: number;
  color: string;
  isActive: boolean;
}

const ProgressBar = ({ width, height, color, isActive }: ProgressBarProps) => {
  return `
    <div class=${styles.container} 
      style="width: ${width}px; height: ${height}px">
      <div class="${
        isActive ? `${styles.active} ${styles.progress}` : styles.progress
      }" style="background-color: ${color}"></div>
    </div>
  `;
};

export default ProgressBar;
