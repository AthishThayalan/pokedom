import "./styles/style.scss";
import "./data/pokemon";
import { Pokemon } from "./data/types";
import pokemonArray from "./data/pokemon";

const container = document.querySelector<HTMLDivElement>(".card-container");
const input = document.querySelector<HTMLInputElement>("input");
const select = document.querySelector<HTMLSelectElement>("select");

if (!container || !input || !select) {
  throw new Error("Element not found.");
}

const populateDropdown = (): void => {
  const typesArr: string[] = [];
  pokemonArray.forEach((pokemon) => {
    pokemon.types.forEach((type) => {
      if (!typesArr.includes(type)) {
        typesArr.push(type);
      }
    });
  });
  console.log(typesArr);
  typesArr.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.innerText = type;
    select.appendChild(option);
  });
};

const generateCards = (pokemon: Pokemon): void => {
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
};
const displayAllCards = (): void => {
  container.innerHTML = "";
  pokemonArray.forEach((pokemon) => {
    generateCards(pokemon);
  });
};

const displayFilteredCards = (): void => {
  const filteredPokemon = pokemonArray.filter((pokemon) => {
    const nameCheck = pokemon.name
      .toLowerCase()
      .includes(input.value.toLowerCase());
    const typeCheck =
      select.value.toLowerCase() === "any" ||
      pokemon.types.includes(select.value);
    return nameCheck && typeCheck;
  });
  container.innerHTML = "";
  filteredPokemon.forEach((pokemon) => {
    generateCards(pokemon);
  });
};

const selectChange = (): void => {
  if (select.value.toLowerCase() === "any") {
    displayAllCards();
  } else {
    const filteredPokemon = pokemonArray.filter((pokemon) => {
      return pokemon.types.includes(select.value);
    });
    container.innerHTML = "";
    filteredPokemon.forEach((pokemon) => {
      generateCards(pokemon);
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  displayAllCards();
  populateDropdown();
});
input.addEventListener("input", displayFilteredCards);
select.addEventListener("change", selectChange);
