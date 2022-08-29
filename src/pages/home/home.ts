import { Section } from '~/components';

import Main from './main';
import Service from './service';
import Fact from './fact';
import Breed from './breed';
import News from './news';
import Investment from './investment';
import Footer from './footer';

const Home = () => {
  return `
    ${Main()}
    ${Section({ children: Service(), color: 'light' })}
    ${Section({ children: Fact(), color: 'light' })}
    ${Section({ children: Breed(), color: 'dark' })}
    ${Section({ children: News(), color: 'dark' })}
    ${Section({ children: Investment(), color: 'light' })};
    ${Footer()}
  `;
};

export default Home;
