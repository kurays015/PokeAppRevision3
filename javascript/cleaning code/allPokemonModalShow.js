import { displayAllModal } from './main.js'
import { searchAndRenderedPokemonsModal } from './searchAndRenderedPokemonModal.js'


const allPokemonModalShow = async (pokemonImg, pokemonsData) => {

  pokemonImg.forEach((img, index) => {
    img.addEventListener('click', async () => {
      displayAllModal.innerHTML = '';   


      await fetchAbilities(pokemonsData);
      //show modal for every pokemon clicked
       displayAllModal.showModal();     
       //add class animation to modal
       displayAllModal.classList.add('zoom-in')
       
    });



    const fetchAbilities = async (pokemonsData) => {
      const response = await fetch(pokemonsData[index].url);
      const pokemonAbilitiesData = await response.json();
      searchAndRenderedPokemonsModal(pokemonAbilitiesData)
    };
  })
}





export { allPokemonModalShow };