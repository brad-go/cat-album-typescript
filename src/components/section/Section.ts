import styles from './Section.module.scss';

type SectionColor = 'light' | 'dark';

interface SectionProps {
  color: SectionColor;
  children: InnerHTML | string;
}

const Section = ({ color, children }: SectionProps) => {
  return `
    <section class="${styles.section} ${styles[color]}">
      <div class="${styles.inner}">
        ${children}
      </div>
    </section>
  `;
};

export default Section;
