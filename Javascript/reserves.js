import { reservePokemonList } from './pokemons.js';

const reserveBox = document.querySelector('#reserveBox');


function displayReserve() {
  reserveBox.innerHTML = '';
  console.log('yoloigen');

  reservePokemonList.forEach((pokemon, index) => {
    const img = document.createElement('img');
    img.src = pokemon.image;
    img.alt = pokemon.name;
    reserveBox.appendChild(img);

    const paragraph = document.createElement('p');
    paragraph.textContent = pokemon.name;
    reserveBox.appendChild(paragraph);

    const kickBtn = document.createElement('button');
    kickBtn.innerText = 'Kick';
    kickBtn.classList.add('kickPokemon');
    reserveBox.appendChild(kickBtn);

    kickBtn.addEventListener('click', () => {
      console.log('Kick button clicked!');
      reservePokemonList.splice(index, 1);
      displayReserve();
    });
  });
}

export { displayReserve };
