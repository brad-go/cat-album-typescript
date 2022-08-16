import Home from "@/components/home";

import type { Target } from "@/utils/types";

const App = ({ $target }: Target<HTMLDivElement>) => {
  $target?.appendChild(Home({ $target }));
};

export default App;
