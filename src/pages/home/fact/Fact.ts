import { FACTS } from '~/constatns/fact';

import FactItem from './FactItem';

import styles from './Fact.module.scss';

const Fact = () => {
  const handleClick = (e: Event) => {
    console.log('not implemented...');
  };

  return `
    <div class=${styles.container}>
      <header class=${styles.header}>
        <h2 class=${styles.title}>
          고양이는 사실 이런 동물입니다. <br />
          알고 계셨나요?
        </h2>
        <a href="#" class=${styles.more}>자세히 보기</a>
      </header>
      <ul class=${styles.list}>
        ${FACTS.map(({ icon, eg, ko, sub }, id) =>
          FactItem({ id, icon, eg, ko, sub, onClick: handleClick }),
        ).join('')}
      </ul>
    </div>
  `;
};

export default Fact;
