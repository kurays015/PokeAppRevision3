const generationsBtn = document.querySelectorAll('.generation')
const container = document.querySelector('.container')
const choices1 = document.querySelector('.choices1')
const choices2 = document.querySelector('.choices2')
const choices3 = document.querySelector('.choices3')
    
const pokemonAbilitiesDataArray = [];


const fetchAllPokemon = async () => {
  try {
    //fetch all pokemons
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1281');
    const data = await response.json();
    const pokemons = data.results;
    //fetch each url's
    for(const pokemon of pokemons) {
      const abilityDataResponse = await fetch(pokemon.url);
      const pokemonAbilitiesData = await abilityDataResponse.json();
      pokemonAbilitiesDataArray.push(pokemonAbilitiesData);
    }
  } catch(error) {
    console.log(error)
  }
}

//--------------------------------------------------------------------------------

const pokemonGenerations = async () => {
    const generationURLs = [
    'https://pokeapi.co/api/v2/generation/1',
    'https://pokeapi.co/api/v2/generation/2',
    'https://pokeapi.co/api/v2/generation/3',
    'https://pokeapi.co/api/v2/generation/4',
    'https://pokeapi.co/api/v2/generation/5',
    'https://pokeapi.co/api/v2/generation/6',
    'https://pokeapi.co/api/v2/generation/7',
    'https://pokeapi.co/api/v2/generation/8'
  ];  
  const responses = await Promise.all(generationURLs.map(url => fetch(url)));
  const generationsData = await Promise.all(responses.map(response => response.json()));
  return generationsData;
}

//--------------------------------------------------------------------------------

const getRandomPokemon = async () => {
  try {
    const generationsArray = await pokemonGenerations();
    await fetchAllPokemon();
    
    generationsBtn.forEach((generation, index) => {
      const pokemonData = generationsArray[index].pokemon_species;
      generation.addEventListener('click', (e) => findRandomPokemon(e, pokemonData));
    });

  } catch(error) {
    console.log(error)
  }      
}
getRandomPokemon();

//-------------------------------------------------------------------------------
const scoreModal = document.querySelector('.scoreModal');
//hamburger nav
const hamburgerMenu = document.querySelector('.hamburger-menu');
const btnContainer = document.querySelector(' .buttons-container ');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  btnContainer.classList.toggle('show');
});



//---------------------------------------------------------------------------

const findRandomPokemon = async (e, pokemonData) => {

  //get one random pokemon
  const random = Math.floor(Math.random() * pokemonData.length);
  //correct answer
  const generateRandomPokemon = pokemonData[random];

  //find that random pokemon in pokemonAbilitiesDataArray
  const found = pokemonAbilitiesDataArray.find(pokemon => pokemon.name === generateRandomPokemon.name);
  //remove the null and undefined
  const hasValidData = pokemonAbilitiesDataArray.some(pokemon =>
  pokemon !== undefined && pokemon.sprites.other.dream_world.front_default !== null);

  //clear container
  container.innerHTML = '';

  //remove classes
  scoreModal.classList.remove('show');
  hamburgerMenu.classList.remove('active')
  btnContainer.classList.remove('show')
  

  if(found && hasValidData) {
    const pokeHTML = await renderRandomPokemon(found);
    container.innerHTML = pokeHTML;
  }

  //return value of chooseAnswer function
  const twoRandomPokemon = chooseAnswer(pokemonData);
  //combine the 2 random, and correct answer to single array 
  const threeChoices = [...twoRandomPokemon, generateRandomPokemon]; 

  //pass the combined choices as argument to renderChoices
  renderChoices(threeChoices, generateRandomPokemon.name);

}


//-------------------------------------------------------------------------------

const renderRandomPokemon = async (found) => {
  const { sprites } = found;
  return `<img class="random-pokeImg" style="filter: brightness(0%);" width="300px" src="${sprites.other.home.front_default}">`;
}

//-------------------------------------------------------------------------------

const chooseAnswer = (pokemonData) => {
  const threeChoices = [];

  while(threeChoices.length < 2) {
    const random = Math.floor(Math.random() * pokemonData.length);
    const randomPoke = pokemonData[random];
    if(!threeChoices.includes(randomPoke)) {
      threeChoices.push(randomPoke)
    }
  }
  return threeChoices;
}

//------------------------------------------------------------------------------
let HP = 5;
let removeUserEvent = null;
let userScore = 0;

const renderChoices = (threeChoices, correctAnswer) => {

if(removeUserEvent) {
  const choicesBtn = document.querySelectorAll('.choices1, .choices2, .choices3');
  choicesBtn.forEach(choice => {
    choice.removeEventListener('click', removeUserEvent);
  })
}

removeUserEvent = (e) => handleChoicesClick(e, correctAnswer);

// Get all choice buttons and add event listeners to each one
const choicesBtn = document.querySelectorAll('.choices1, .choices2, .choices3');
choicesBtn.forEach((choice, index) => {
  choice.addEventListener('click', removeUserEvent, {once : true});
  choice.innerHTML = threeChoices[index].name;
});
};


const handleChoicesClick = (e, correctAnswer) => {

const img = document.querySelector('.random-pokeImg');

  // Get the text content of the clicked choices
  const clickedChoice = e.target.textContent;

  // Check if the clicked choice is the correct answer
  if (clickedChoice === correctAnswer) {
    //increment score
    userScore++;

    //score modal
    scoreModal.classList.add('show');

    //dispaly pc score
    document.querySelector('.score').innerHTML = userScore;
    //display mobile score
    document.querySelector('.points').innerHTML = userScore;

    img.style.filter = 'brightness(100%)';

    console.log('Correct!')

  } else {
    console.log('Wrong!')
  }
};
//---------------
