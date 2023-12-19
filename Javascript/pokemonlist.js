const pokemonList = document.getElementById('pokemonList');

function displayPokemons() {
    const pokemons = getPokemons();

    pokemons.forEach(function (pokemon) {
        console.log(pokemon);

        const div = document.createElement('div');
        div.setAttribute('class', 'displayPokemon');

        // Skapar bilden
        const img = document.createElement('img');
        img.src = pokemon.image; // Assuming your Pokemon object has an 'image' property
        img.alt = pokemon.name;

        div.appendChild(img);

        // Skapar namnet
        const paragraph = document.createElement('p');
        paragraph.textContent = pokemon.name;

        div.appendChild(paragraph);

        pokemonList.appendChild(div);
    });
}
