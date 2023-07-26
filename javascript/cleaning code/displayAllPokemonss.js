import { initializeModal, setupPlusIconClickEvent } from './teamModal.js' //plus icon click event and initialize team modal
import { selectedPokemons, addedPokemon, modalInfo, modalContainer, modalExit } from './main.js' // team array & modal
import { displayAllPlusIcon } from './main.js' //displayAll file plus icon
import { renderedPokemons } from './main.js' // rendered pokemons container
import { allPokemonModalShow } from './allPokemonModalShow.js' //modal for all pokemons when picture is clicked

async function pokemonAbilitiesData(pokemonsData) {


  //function to display pokemons
 function displayAllPokemon(pokeAbilityData, typeNames) {
   
   const pokemonHTML = `
     <div class="page-load-cards">
       <img class="poke-img" src="${pokeAbilityData.sprites.other.home.front_default}">
       <h1 class="pokemon-name">${pokeAbilityData.name}</h1>
       <p class="poke-types" title="Add to team">${displayAllPlusIcon} ${typeNames}</p>
     </div>
     `;

   renderedPokemons.innerHTML += pokemonHTML

   //each clicked on the plus icon is added to the selectedPokemons empty array
   setupPlusIconClickEvent(selectedPokemons);
   
   const pokemonImage = document.querySelectorAll('.poke-img');
   allPokemonModalShow(pokemonImage, pokemonsData)
  }

//show modal
initializeModal(addedPokemon, modalInfo, modalContainer, modalExit);


 //iterate to pokemonData that contains pokemons URL who also have a data
 for(const pokemonData of pokemonsData) {
   const response = await fetch(pokemonData.url)
   if(response.ok) {
     const pokemonAbilitiesData = await response.json();
     const pokemonTypes = pokemonAbilitiesData.types;
     const typeNames = pokemonTypes.map(types => types.type.name).join(', ')
     const hasValidImage = pokemonAbilitiesData.sprites.other.dream_world.front_default !== null;
     
     //pass the pokemonAbilitiesData and typeNames as arguments
     if(hasValidImage) {
       displayAllPokemon(pokemonAbilitiesData, typeNames)
     }

     } else {
       throw new Error('Request failed with status ' + response.status);
     }
   }
  
}

export { pokemonAbilitiesData };