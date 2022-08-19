import type { Cat } from '~/types';

import { getImageOfCats } from './api';
import { useState, useEffect } from './core';
import { INITIAL_CAT } from './constatns';

import { Home } from './pages/home';

const App = () => {
  const [catImage, setCatImage] = useState<Cat>(INITIAL_CAT);

  const fetchCatImages = async () => {
    try {
      const data = await getImageOfCats();
      const image = data[0];

      setCatImage({ ...image });
    } catch (e) {
      throw new Error(`렌더링 실패 ${(e as Error).message}`);
    }
  };

  const handleClick = (e: MouseEvent) => {
    fetchCatImages();
  };

  useEffect(() => {
    fetchCatImages();
  }, []);

  return `
    ${Home({ catImage, onClick: handleClick })}
  `;
};

export default App;
