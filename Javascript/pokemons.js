const pokemons=[]

function savePokemon (image, name) {
	pokemons.push({image, name})
	console.log(pokemons);
}

function getPokemons(){
	return pokemons
}