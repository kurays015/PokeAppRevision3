import { addedPokemon, selectedPokemons } from './main.js'
//function that shows modal
const initializeModal = (addedPokemon, modalInfo, modalContainer, modalExit) => {
  
  //when the displayed count of added pokemons clicked, the modal will show
  addedPokemon.addEventListener('click', () => {
    modalInfo.innerHTML = '';
    
    selectedPokemons.map((selectedPokemon, index) => {
      const modalHTML = `
        <div class="modal-pokemons" 
        data-aos-duration="700"
        data-aos="zoom-in">
        <i data-index="${index}" class="fa-regular fa-circle-xmark remove-btn" style="color: #492c6d;"></i>
          <img src="${selectedPokemon.img}">
          <p class="modal-poke-names">${selectedPokemon.name}</p>
          <p class="modal-poke-types">${selectedPokemon.type}</p>  
        </div>
      `
      modalInfo.innerHTML += modalHTML;
    });
    //pokemon remover
    const removePokemons = document.querySelectorAll('.remove-btn');
    handleRemovePokemon(removePokemons);

    modalContainer.classList.add('zoom-in')
    modalContainer.showModal();
  });

  //modal close
  modalExit.addEventListener('click', () => {
   
    modalContainer.classList.add('zoom-out')


    modalContainer.addEventListener('animationend', () => {
      
      modalContainer.classList.remove('zoom-out')
      modalContainer.close();
    }, {once : true})
  });
}

//selectedPokemons remover
const handleRemovePokemon = (removePokemons) => {

  //remove element/pokemon from selectedPokemons array
  removePokemons.forEach((removePokemon) => {
    removePokemon.addEventListener('click', (e) => {
      const parent = removePokemon.parentNode;
      parent.remove();
      removeOnePokemon(e);
      // selectedPokemons.length --;
    })
  });
}

const removeOnePokemon = (e) => {
  const index = e.target.dataset.index;
  selectedPokemons.splice(index, 1);
}



//function that push the pokemon details to the selectedPokemons empty array using the plus icon button
const setupPlusIconClickEvent = (selectedPokemons) => {

  const plusIcons = document.querySelectorAll('.fetchAllTypes-plusIcon, .displayAll-plusIcon, .searchPokemon-plusIcon');

  plusIcons.forEach(plus => {
    plus.addEventListener('click', () => {
      if(selectedPokemons.length < 10) {
        const pokemonNames = plus.parentNode.parentNode.querySelector('.pokemon-name').textContent;
        const pokemonTypes = plus.parentNode.parentNode.querySelector('.poke-types').textContent;
        const pokemonImg = plus.parentNode.parentNode.querySelector('.poke-img, .poke-imgs').src;
        const isDuplicate = selectedPokemons.some(pokemon => pokemon.name === pokemonNames);

        if (!isDuplicate) {

          const selectedPokemon = {
            name: pokemonNames,
            type: pokemonTypes,
            img: pokemonImg
          };

          selectedPokemons.push(selectedPokemon);
  
          //pokemon added counter
          document.querySelector('.pokemon-count').innerHTML = selectedPokemons.length;

        }
      }

      addedPokemon.classList.add('active');
    });
  });

}

export { initializeModal, setupPlusIconClickEvent };
