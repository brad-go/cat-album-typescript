import { createRoot } from '~/core';
import App from './app';

import '~/styles/global.scss';

const $target: HTMLDivElement = document.querySelector('.app')!;

createRoot(App, $target);
