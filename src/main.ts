import "./styles/style.scss";
import "./data/pokemon";
import "./data/types";
import pokemonArray from "./data/pokemon";

const container = document.querySelector<HTMLDivElement>(".card-container");
console.log("HELLo");

if (!container) {
  throw new Error("Element not found.");
}

const generatePokemonCards = (): void => {
  // card container --> card , card img --> card,content --> card text , card heading
  console.log("LOADED");
  pokemonArray.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = pokemon.sprite;
    image.alt = pokemon.name;
    card.appendChild(image);
  });
};

document.addEventListener("DOMContentLoaded", generatePokemonCards);
