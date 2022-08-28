import styles from './Carousel.module.scss';

interface ItemProps {
  id: number;
  width: number;
  section: string;
  title: string;
  date: string;
  link: string;
}

const Item = ({ id, width, section, title, date, link }: ItemProps) => {
  return `
    <li id=${id} class=${styles.slide} style="width: ${width}px">
      <a href="${link}">
        <span class=${styles.section}>${section}</span>
        <h4 class="${styles.title} ${styles.text_overflow}">${title}</h4>
        <div class=${styles.bar}></div>
        <span class=${styles.date}>${date}</span>
      </a>
    </li>
  `;
};

export default Item;
