import styles from './Section.module.scss';

interface SectionProps {
  children: InnerHTML | string;
}

const Section = ({ children }: SectionProps) => {
  return `
    <section class=${styles.section}>${children}</section>
  `;
};

export default Section;
