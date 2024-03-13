import "./styles/style.scss";
import "./data/pokemon";
import "./data/types";
import pokemonArray from "./data/pokemon";

const container = document.querySelector<HTMLDivElement>(".card-container");

if (!container) {
  throw new Error("Element not found.");
}

const generatePokemonCards = (): void => {
  pokemonArray.forEach((pokemon) => {
    const pokemonTypes = pokemon.types;
    const pokemonTypesText: string =
      pokemonTypes.length === 1
        ? `${pokemonTypes[0]}`
        : `${pokemonTypes[0]} & ${pokemonTypes[1]}`;
    const pokemonName =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = pokemon.sprite;
    image.alt = pokemon.name;
    card.appendChild(image);

    const content = document.createElement("div");
    content.classList.add("card__content");

    const heading = document.createElement("h2");
    heading.classList.add("card__heading");
    heading.innerText = pokemonName;
    content.appendChild(heading);

    const text = document.createElement("p");
    text.classList.add("card__text");

    text.innerText = `${pokemonName} (#${pokemon.id}) is a ${pokemonTypesText} type pokemon.`;
    content.appendChild(text);

    card.appendChild(content);

    container.appendChild(card);
  });
};

document.addEventListener("DOMContentLoaded", generatePokemonCards);
