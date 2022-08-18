import { useState, useEffect } from './core';

import { Home } from './pages/home';

import { getImageOfCats } from './api';

const App = () => {
  const [catImage, setCatImage] = useState({});

  const fetchCatImages = async () => {
    try {
      const data = await getImageOfCats();
      const image = data[0];

      setCatImage({ ...image });
    } catch (e) {
      throw new Error(`렌더링 실패 ${(e as Error).message}`);
    }
  };

  useEffect(() => {
    fetchCatImages();
  }, []);

  return `
    ${Home({ catImage })}
  `;
};

export default App;
