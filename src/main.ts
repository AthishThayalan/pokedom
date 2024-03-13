import "./styles/style.scss";
import "./data/pokemon";
import "./data/types";

const container = document.querySelector<HTMLDivElement>("card-container");

if (!container) {
  throw new Error("Element not found.");
}

const generatePokemonCards = (): void => {
  // card container --> card , card img --> card,content --> card text , card heading
};

container.addEventListener("DOMContentLoad", generatePokemonCards);
