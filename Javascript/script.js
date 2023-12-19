const buttonsElement = document.getElementById('buttons');
const headerElement = document.getElementById('header');
const header2Element = document.getElementById('header2');
const header3Element = document.getElementById('header3');
const PokemonListElement = document.querySelector('.PokemonList');
const findPokemonBackElement = document.getElementById('findPokemonBack');
const myPokemonBackElement = document.getElementById('myPokemonBack');
const pokemonSearchElement = document.getElementById('pokemonSearch');
const pokemonBoxElement = document.getElementById('pokemonBox');
const searchElement = document.getElementById('search');
const pokemonNameElement = document.getElementById('pokemonName');
const computedVisibility = window.getComputedStyle(buttonsElement).visibility;
const pokemonList2 = document.getElementById('pokemonList');
const pokemonsInfos = document.getElementById('pokemonsInfos')

function myPokemon() {
	displayPokemons()
	const displayPokemonElements = document.querySelectorAll('.displayPokemon');
    buttonsElement.style.visibility = (computedVisibility === 'hidden') ? 'visible' : 'hidden';

    headerElement.style.display = 'none';
    header2Element.style.display = 'block';
    findPokemonBackElement.style.display = 'block';
	pokemonBoxElement.style.display = 'none';
    PokemonListElement.classList.add('visible');
    displayPokemonElements.forEach(function (element) {
        element.style.display = 'block';
    });
}

function findPokemon() {
	const displayPokemonElements = document.querySelectorAll('.displayPokemon');
    buttonsElement.style.visibility = (computedVisibility === 'hidden') ? 'visible' : 'hidden';

    findPokemonBackElement.style.display = 'none';
    headerElement.style.display = 'none';
    header2Element.style.display = 'none';
    header3Element.style.display = 'block';
    myPokemonBackElement.style.display = 'block';
	searchElement.style.display = "block";
	pokemonNameElement.style.display = "block";
	// pokemonSearchElement.style.display = 'block';

    displayPokemonElements.forEach(function (element) {
        element.style.display = 'none';
    });

    console.log('Hejhej');
}

function findPokemonBack() {
	pokemonList2.innerHTML=''
	const displayPokemonElements = document.querySelectorAll('.displayPokemon');
    buttonsElement.style.visibility = (computedVisibility === 'hidden') ? 'visible' : 'hidden';

    findPokemonBackElement.style.display = 'none';
    headerElement.style.display = 'none';
    header2Element.style.display = 'none';
    header3Element.style.display = 'block';
    myPokemonBackElement.style.display = 'block';
	findPokemonBackElement.style.display = 'none';	
    PokemonListElement.style.display = 'none';
	searchElement.style.display = "block";
	pokemonNameElement.style.display = "flex";
	pokemonBoxElement.style.display = "flex";
	// pokemonSearchElement.style.display = 'block';

    displayPokemonElements.forEach(function (element) {
        element.style.display = 'block';
    });

    console.log('Hejhej');
}

function myPokemonBack() {
	displayPokemons()
	const displayPokemonElements = document.querySelectorAll('.displayPokemon');
    buttonsElement.style.visibility = (computedVisibility === 'hidden') ? 'visible' : 'hidden';

    headerElement.style.display = 'none';
    header2Element.style.display = 'block';
    header3Element.style.display = 'none';
    myPokemonBackElement.style.display = 'none';
    PokemonListElement.style.display = 'block';
	PokemonListElement.style.display = 'grid';
	findPokemonBackElement.style.display = 'block'
	pokemonNameElement.style.display = "none";
	searchElement.style.display = "none";
	pokemonBoxElement.style.display = "none";
	// pokemonsInfos.style.display = "none";
	// pokemonSearchElement.style.display = 'none';

    displayPokemonElements.forEach(function (element) {
        element.style.display = 'block';
    });

    console.log('mypokemonback');
}
