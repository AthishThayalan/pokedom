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

    const content = document.createElement("div"); // this needs card__heading and card__text
    content.classList.add("card__content");

    const heading = document.createElement("h2");
    heading.classList.add("card__heading");
    heading.innerText = pokemon.name;
    content.appendChild(heading);

    const text = document.createElement("p");
    text.classList.add("card__text");
    text.innerText = `${pokemon.name}(#${pokemon.id}) is a grass & poison type pokemon.`;
    content.appendChild(text);

    card.appendChild(content);

    container.appendChild(card);
  });
};

document.addEventListener("DOMContentLoaded", generatePokemonCards);
