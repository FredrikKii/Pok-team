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

		const inputField = document.createElement('input');
		inputField.type = 'text';
		inputField.placeholder = 'Enter nickname';
		inputField.value = pokemon.nickname || '';
		pokemonList.appendChild(inputField);
	
		const saveBtn = document.createElement('button');
		saveBtn.innerText = 'Save Nickname';
		saveBtn.classList.add('saveNickname');
		pokemonList.appendChild(saveBtn);
	
		saveBtn.addEventListener('click', () => {
		  const nickname = inputField.value;
		  updateNickname(nickname, index);
		  displayPokemons();
		});


        const kickBtn = document.createElement('button');
        kickBtn.innerText = 'Kick';
        kickBtn.classList.add('kickPokemon');
        pokemonList.appendChild(kickBtn);

        kickBtn.addEventListener('click', () => {
            displayPokemon.style.display = 'grid';

        
            if (pokemonsList.length > 3) {
                const movedPokemon = pokemonsList[index];
                reservePokemonList.push(movedPokemon);
                displayReserve(reservePokemonList);
                pokemonsList.splice(index, 1);
                console.log('Before calling displayPokemons');
                displayPokemons();
		
		
            } else {
                pokemonsList.splice(index, 1);
                console.log('Contents of reservePokemonList:', reservePokemonList);
                displayPokemons();
            }
			renderTeamSize()
        });
    });
}

export { displayPokemon, displayPokemons };
