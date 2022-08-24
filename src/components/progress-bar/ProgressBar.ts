import { useEffect, useState } from '~/core';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  width: number;
  height: number;
  color: string;
  currentPage: number;
}

const ProgressBar = ({
  width,
  height,
  color,
  currentPage,
}: ProgressBarProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(false);
  }, [currentPage]);

  useEffect(() => {
    setIsActive(true);
  }, [isActive]);

  return `
    <div class=${styles.container} 
      style="width: ${width}px; height: ${height}px"
    >
      <div class="
        ${isActive ? `${styles.progress} ${styles.active}` : styles.progress}
      " style="background-color: ${color}"></div>
    </div>
  `;
};

export default ProgressBar;
