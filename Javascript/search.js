import {savePokemon} from './pokemons.js';
document.querySelector("#pokemonName").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getPokemon(e);
  }	
});

document.querySelector("#search").addEventListener("click", function (e) {
  getPokemon(e);
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}
let pokemonListResult

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`)
    .then((response) => response.json())
    .then((data) => {
		pokemonListResult = data.results;
      const pokemonNames = data.results.map((pokemon) => pokemon.name);
      const suggestions = pokemonNames.filter((pokemon) => pokemon.startsWith(pokemonName));

      if (suggestions.length > 0) {
        displaySuggestions(suggestions);
      } else {
        fetchPokemon(pokemonName);
      }
    })
    .catch((err) => {
      console.log("Error fetching Pokémon names", err);
    });

  e.preventDefault();
}

function displaySuggestions(suggestions) {
  const pokemonBox = document.querySelector(".pokemonBox");
  pokemonBox.innerHTML = '';

  suggestions.slice(0, 3).forEach((suggestion) => {
    fetchPokemon(suggestion);
  });
}

function fetchPokemon(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      const pokemonBox = document.querySelector(".pokemonBox");
      const pokemonSearchResult = document.createElement("div");
      pokemonSearchResult.classList.add("pokemonResult");

      pokemonSearchResult.innerHTML = `
        <div>
          <img class="pokemonImage" src="${data.sprites.other["official-artwork"].front_default}" alt="Pokemon name" />
        </div>
        <div class="pokemonInfos">
          <h1>${capitalizeFirstLetter(data.name)}</h1>
          <button class="savePokemon">Add Pokemon</button>
        </div>
      `;

      pokemonBox.appendChild(pokemonSearchResult);

      const savePokemonBtn = pokemonSearchResult.querySelector(".savePokemon");
      savePokemonBtn.addEventListener("click", function (e) {
        savePokemon(data.sprites.other["official-artwork"].front_default, capitalizeFirstLetter(data.name));
        e.preventDefault();
        console.log("Pokemon saved", pokemonName);
      });
    })
    .catch((err) => {
      console.log("Pokémon not found", err);
    });
}
