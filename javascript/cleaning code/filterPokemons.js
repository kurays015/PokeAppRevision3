import { icons, pokemonTypesContainer, fetchAllTypesPlusIcon, selectedPokemons  } from './main.js'
import { setupPlusIconClickEvent  } from './teamModal.js'
import { fetchTypeModal, loaderContainer, renderedPokemons, backArrowIcon } from './main.js'
import { filteredTypes } from './filteredTypesModal.js'
import { applyCardStyles } from './applyCardStyle.js'

const filterPokemon = (pokemonsData) => {

  // Store the array of pokemons in a variable called pokemons
  // const pokemons = pokemonsData;

  // Create a Pokemon card HTML string
  function createPokemonCard(pokemonAbilityData, typeNames) {

    const pokemonHTML = `
      <div class="cards"
        data-aos-duration="700"
        data-aos="zoom-in">
        <img class="poke-imgs" src="${pokemonAbilityData.sprites.other.dream_world.front_default}">
        <h1 class="pokemon-name">${pokemonAbilityData.name}</h1>
        <p class="poke-types" title="Add to team">${fetchAllTypesPlusIcon} ${typeNames}</p>
      </div>
    `;
  
    pokemonTypesContainer.innerHTML += pokemonHTML;

    //each clicked on the plus icon is added to the selectedPokemons empty array
    setupPlusIconClickEvent(selectedPokemons);

  }

  // Fetch and display pokemons based on selected checkboxes
  async function fetchAndDisplayPokemons(typeName) {
    
    const filteredPokemons = [];
  
    //every click of pokemon types icon, the container will reset.
    pokemonTypesContainer.innerHTML = '';

    for(const pokemon of pokemonsData) {
      const response = await fetch(pokemon.url);

      if(response.ok) {
        const pokemonAbilityData = await response.json();
        const pokemonTypes = pokemonAbilityData.types;
        const hasValidImage = pokemonAbilityData.sprites.other.dream_world.front_default !== null;
        
        const filteredPokemonTypes = [];
        
        for(const types of pokemonTypes) {
          if(types.type.name === typeName) {
            filteredPokemonTypes.push(types);
            filteredPokemons.push({ 
              name: pokemonAbilityData.name, 
              img: pokemonAbilityData.sprites.other.home.front_default, 
              abilities: pokemonAbilityData.abilities, 
              types: pokemonAbilityData.types,
              stats: pokemonAbilityData.stats
            });
          }
        }
   
        for(const type of filteredPokemonTypes) {
          if(hasValidImage) {
            createPokemonCard(pokemonAbilityData, type.type.name)
            const cards = document.querySelectorAll('.cards');
            cards.forEach(card => {
              applyCardStyles(card, type.type.name);
            });
          }
        }
         
      } else {
        // Handle non-OK response (e.g., 404)
        throw new Error('Request failed with status ' + response.status);
      }
    }

    const pokemonImage = document.querySelectorAll('.poke-imgs');
    pokemonImage.forEach((img) => {
      img.addEventListener('click', () => {
        fetchTypeModal.innerHTML = '';  
        const pokemonName = img.nextElementSibling.textContent;        
        const filtered = filteredPokemons.find(pokemon => pokemon.name === pokemonName);
        filteredTypes(filtered);
        //show modal for every pokemon clicked
        fetchTypeModal.show();
        //add class animation to modal
        fetchTypeModal.classList.add('zoom-in');
      })
    })
  }

  icons.forEach(icon => {
    //aside targeted
    const iconParent = icon.parentNode.parentNode;
   
    icon.addEventListener('click', async () => {
      //add class
      backArrowIcon.classList.add('right');
      
      //add class
      iconParent.classList.add('remove')

      //loader
      loaderContainer.style.display = 'block';      
      //rendered each pokemon types
      const typeName = icon.nextElementSibling.getAttribute('data-value');
      fetchAndDisplayPokemons(typeName)
      renderedPokemons.style.display = 'none';

      setTimeout(() => {
        //loader will be hidden
        loaderContainer.style.display = 'none';
      }, 3000)    
    });
    
    backArrowIcon.addEventListener('click', () => {
        location.reload();
    });
  });

}

export { filterPokemon };