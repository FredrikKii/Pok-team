document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <div>
        <img class="pokemonImage"	
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
		<label for="nickname">Nickname:</label>
        <input type="text" id="nickname" placeholder="Enter nickname">
		<button onclick="savePokemon('${data.sprites.other["official-artwork"].front_default}', '${capitalizeFirstLetter(data.name)}')">Add pokemon</button>
      </div>`;
    })
    .catch((err) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <h4>Pokémon not found 😞</h4>
      `;
      console.log("Pokémon not found", err);
    });

  e.preventDefault();
}