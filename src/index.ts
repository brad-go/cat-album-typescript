import { createRoot } from '~/core';
import App from './App';

import '~/styles/global.scss';

const $target: HTMLDivElement = document.querySelector('.App')!;

createRoot(App, $target);
