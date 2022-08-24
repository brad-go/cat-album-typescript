import styles from './ImageSlider.module.scss';

interface SlideImageProps {
  id: number;
  url: string;
  isActive: boolean;
}

const SlideImage = ({ id, url, isActive }: SlideImageProps) => {
  return `
    <div id=${id} 
      class="${styles.image} ${styles.active} ${isActive ? '' : styles.hidden}" 
      style="background-image: url(${url})"
    >
    </div>`;
};

export default SlideImage;
