
let pokemonsList = []
let reservePokemonList = []
let countTeam = 3
let teamInfo = document.querySelector('.teamInfo');
teamInfo.innerText = 'You need 3 more pokémons in your team!'
function savePokemon (image, name) {
	if (pokemonsList.length < 3) {
		pokemonsList.push({image, name, nickname:''})
	} else {
	
		reservePokemonList.push({image, name})
	}
	renderTeamSize()
	// displayReserv(reservePokemonList);
}


// function getPokemons(){
// 	return pokemons
// }

export {pokemonsList, savePokemon, reservePokemonList, teamInfo, renderTeamSize}


function renderTeamSize() {
	if (pokemonsList.length <= 3) {
		countTeam = Math.abs(pokemonsList.length -3);
		teamInfo.innerText = 'You need ' + countTeam + ' more in your team';
		
		if (pokemonsList.length === 3) {
			teamInfo.innerText = 'Team is full  ';
		}
	}
}

function updateNickname(nickname, index) {
	pokemonsList[index].nickname = nickname
}

export { updateNickname }