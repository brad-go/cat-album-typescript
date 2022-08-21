import styles from './ImageSlider.module.scss';

interface SlideImageProps {
  id: number;
  url: string;
  isActive: boolean;
}

const SlideImage = ({ id, url, isActive }: SlideImageProps) => {
  const setClassList = (isActive: boolean) => {
    return isActive
      ? `${styles.image} ${styles.active}`
      : `${styles.image} ${styles.active} ${styles.hidden}`;
  };

  return `
    <div id=${id} 
      class="${setClassList(isActive)}" style="background-image: url(${url})">
    </div>`;
};

export default SlideImage;
