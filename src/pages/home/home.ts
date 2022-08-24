import { Section } from '~/components';

import MainSection from './main-section';
import ServiceSection from './service-section';
import FactSection from './fact-section';

import styles from './Home.module.scss';

const Home = () => {
  return `
    ${MainSection()}
    ${Section({ children: ServiceSection() })}
    ${Section({ children: FactSection() })}
  `;
};

export default Home;
