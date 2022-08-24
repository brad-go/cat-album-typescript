import { Section } from '~/components';

import MainSection from './main-section';
import ServiceSection from './service-section';

import styles from './Home.module.scss';

const Home = () => {
  return `
    ${MainSection()}
    ${Section({ children: ServiceSection() })}
  `;
};

export default Home;
