import { displayPokemon, displayPokemons } from './pokemonlist.js';
import { teamInfo } from './pokemons.js';
import { displayReserve } from './reserves.js';
// import {}
const buttonsElement = document.querySelector('.buttons');
const headerElement = document.getElementById('header');
const header2Element = document.getElementById('header2');
const header3Element = document.getElementById('header3');
const PokemonListElement = document.querySelector('.PokemonList');
const findPokemonBackElement = document.getElementById('findPokemonBack');
const myPokemonBackElement = document.querySelector('.myPokemonBack');
const pokemonSearchElement = document.getElementById('pokemonSearch');
const pokemonBoxElement = document.getElementById('pokemonBox');
const searchElement = document.getElementById('search');
const pokemonNameElement = document.getElementById('pokemonName');
// const computedVisibility = window.getComputedStyle(buttonsElement).visibility;
// const pokemonList2 = document.getElementById('pokemonList');
const pokemonsInfos = document.getElementById('pokemonsInfos')
const reservePokemonList2 = document.getElementById('reservePokemonList')
const searchBoxElement = document.querySelector('.searchBox')
const reserveBox = document.querySelector('.reserveBox');

const myPokemonBtn = document.querySelector('.myPokemon');
myPokemonBtn.addEventListener('click', myPokemon);

const findPokemonBtn = document.querySelector('.findPokemon');
findPokemonBtn.addEventListener('click',findPokemon);

const myPokemonBackBtn = document.querySelector('.myPokemonBack');
myPokemonBackBtn.addEventListener('click', myPokemonBack);

const findPokemonBackBtn = document.querySelector('.findPokemonBack')
findPokemonBackBtn.addEventListener('click',findPokemonBack);


function myPokemon() {	
    displayPokemons()
	displayReserve()
    
    buttonsElement.style.display = 'none';
    headerElement.style.display = 'none';
    header2Element.style.display = 'block';
    findPokemonBackElement.style.display = 'block';
	pokemonBoxElement.style.display = 'none';
	teamInfo.style.display = 'flex';
	reserveBox.style.display = 'flex';
	reserveBox.style.display = 'visible'
}

function findPokemon() {

    
    findPokemonBackElement.style.display = 'none';
    headerElement.style.display = 'none';
    header2Element.style.display = 'none';
    buttonsElement.style.display = 'none';
    header3Element.style.display = 'block';
    myPokemonBackElement.style.display = 'block';
	searchElement.style.display = "block";
	pokemonNameElement.style.display = "block";
	teamInfo.style.display = 'flex';
	
	
        
        console.log('Hejhej');
    }
    
    function findPokemonBack() {
        const displayPokemonElements = document.querySelectorAll('.displayPokemon');
        
        buttonsElement.style.display = 'none';
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
        searchBoxElement.style.display = 'flex';
		teamInfo.style.display = 'flex';
		reserveBox.style.display = 'none'
        
        displayPokemonElements.forEach(function (element) {
            element.style.display = 'block';
        });
        
        console.log('Hejhej');
    }
    
    function myPokemonBack() {
        displayPokemons()
		displayReserve()
		teamInfo.style.display = 'flex';
        buttonsElement.style.display = 'none';
        PokemonListElement.style.display = 'block';
    header2Element.style.display = 'block';
    header3Element.style.display = 'none';
    myPokemonBackElement.style.display = 'none';
	PokemonListElement.style.display = 'grid';
	findPokemonBackElement.style.display = 'block';
	searchBoxElement.style.display = 'none';
	pokemonBoxElement.style.display = "none";
	reserveBox.style.display = 'flex';
	

    console.log('mypokemonback');
}