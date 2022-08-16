import { Target } from "@/utils/types";
import { getImageOfCats, getImageOfCatsByBreeds } from "@/api";

const Home = ({ $target }: Target<HTMLDivElement>) => {
  const $home = document.createElement("div");
  $home.className = "home";
  $home.innerHTML = "<h1>Home</h1>";

  const render = () => {
    $target.innerHTML = "";
    $target.appendChild($home);
  };

  render();

  return $home;
};

export default Home;
