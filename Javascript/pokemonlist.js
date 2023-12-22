// Assuming you have a function to display the Pokemon items
// import { pokemonsList, reservePokemonList } from './pokemons.js';

import { displayReserve } from './reserves.js';
import { pokemonsList, renderTeamSize, reservePokemonList, updateNickname } from './pokemons.js';

const displayPokemon = document.querySelector('.displayPokemon');

function displayPokemons() {
    const pokemonList = document.querySelector('.PokemonList');
    pokemonList.innerHTML = '';
    console.log('YOLO1', pokemonsList.length);

    pokemonsList.forEach((pokemon, index) => {
        // Shows image and name
        const img = document.createElement('img');
        img.src = pokemon.image;
        img.alt = pokemon.name;
        pokemonList.appendChild(img);

        const paragraph = document.createElement('p');
        paragraph.textContent = pokemon.name;
        pokemonList.appendChild(paragraph);

		//här kallar jag på updateNickname.
		//skapa input
		//skapa knapp
		//Eventlistener onclick "hämta värde från input" - Kalla på updateNickname med värde och index. displayPokemons()
		const inputField = document.createElement('input');
		inputField.type = 'text';
		inputField.placeholder = 'Enter nickname';
		inputField.value = pokemon.nickname || '';
		pokemonList.appendChild(inputField);
	
		// Create button
		const saveBtn = document.createElement('button');
		saveBtn.innerText = 'Save Nickname';
		saveBtn.classList.add('saveNickname');
		pokemonList.appendChild(saveBtn);
	
		// Event listener on button click
		saveBtn.addEventListener('click', () => {
		  const nickname = inputField.value;
		  updateNickname(nickname, index);
		  // Call displayPokemons to re-render the updated list
		  displayPokemons();
		});


        const kickBtn = document.createElement('button');
        kickBtn.innerText = 'Kick';
        kickBtn.classList.add('kickPokemon');
        pokemonList.appendChild(kickBtn);

        kickBtn.addEventListener('click', () => {
            displayPokemon.style.display = 'grid';

            // Check if pokemonsList has more than 3 Pokémon
            if (pokemonsList.length > 3) {
                const movedPokemon = pokemonsList[index];
                reservePokemonList.push(movedPokemon);
                // Update the displayed Reserve list
                displayReserve(reservePokemonList);
                // Remove the Pokemon from pokemonsList
                pokemonsList.splice(index, 1);
                // Update the displayed Pokemon list
                console.log('Before calling displayPokemons');
                displayPokemons();
		
		
            } else {
                // If pokemonsList has 3 or fewer Pokémon, just remove it
                pokemonsList.splice(index, 1);
                // Update the displayed Pokemon list
                console.log('Contents of reservePokemonList:', reservePokemonList);
                displayPokemons();
            }
			renderTeamSize()
        });
    });
}

export { displayPokemon, displayPokemons };


	//   div.appendChild(button);


	// För att kunna styla topp 3
	//   if (index < 3) {
	// displayPokemon.classList.add('top'); // Styla topp 3


	//   pokemonList.appendChild(div);


	// Call displayPokemons to initially display the Pokemon list