import styles from './Image.module.scss';

interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
  return `
    <img class=${styles.image} src=${src} alt=${alt} />
  `;
};

export default Image;
