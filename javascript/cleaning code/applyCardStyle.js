// Apply card styles based on Pokemon type
export const applyCardStyles = (card, typeName) => {
  let gradientBackground;
  const pokemonTypes = document.querySelectorAll('.poke-types');

  switch (typeName) {
    case 'bug':
      gradientBackground = 'linear-gradient(to right top, #e32758, #e63157, #ea3a56, #ed4256, #f04a55, #ed4e55, #eb5155, #e85455, #df5456, #d75456, #ce5357, #c55357)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #ff9999, 0 0 12px 2px #ff6666, 0px 10px 20px -5px black, 0 0 40px -30px #ff6666, 0 0 50px -20px #ff6666';
      pokemonTypes.forEach(type => {
        type.style.color = '#510707'
      })
      break;

    case 'electric':
      gradientBackground = 'linear-gradient(to right bottom, #FDEB71, #F6DC69, #F0CE61, #E9BF5A, #E2B155, #D9A24E, #D09748, #C78C43, #BA7F3E, #AB7239, #9A6534, #86572E)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px hsl(47, 100%, 78%) , 0 0 12px 2px hsl(54, 87%, 63%), 0px 10px 20px -5px black, 0 0 40px -30px hsl(54, 87%, 63%), 0 0 50px -20px hsl(54, 87%, 63%)'    
      pokemonTypes.forEach(type => {
        type.style.color = '#EADE61'
      })
      break;

    case 'water':
      gradientBackground = 'linear-gradient(to right bottom, #3F75A7, #4C7EB0, #5997B8, #65AFC1, #70BDC6, #7BCBCB, #85D9D0, #90E6D4, #9AEBD8, #A6EFD9, #B3F3DB, #C0F7DC)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #86bce5, 0 0 12px 2px #4fa8e5, 0px 10px 20px -5px black, 0 0 40px -30px #4fa8e5, 0 0 50px -20px #4fa8e5';
      pokemonTypes.forEach(type => {
        type.style.color = '#0C455E'
      })
      break;

    case 'poison':
      gradientBackground = 'linear-gradient(to right bottom, #894A8E, #925395, #9C5D9B, #A664A1, #B06BA8, #BA72AF, #C67AB5, #D081BC, #DA88C2, #E38FCA, #EC96D1, #F59ED8)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #b080d9, 0 0 12px 2px #8c4db3, 0px 10px 20px -5px black, 0 0 40px -30px #8c4db3, 0 0 50px -20px #8c4db3';
      pokemonTypes.forEach(type => {
        type.style.color = '#8B44AE'
      })
      break;

    case 'rock':
      gradientBackground = 'linear-gradient(to right bottom, #A48C78, #9A8270, #8F7769, #846D61, #79635A, #6E5953, #634F4B, #594645, #4E3C3E, #443235, #3A292E, #2F1F26)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #bfbfbf, 0 0 12px 2px #999999, 0px 10px 20px -5px black, 0 0 40px -30px #999999, 0 0 50px -20px #999999'; 
      pokemonTypes.forEach(type => {
        type.style.color = '#DBD2A9'
      })
      break;

    case 'fire':
      gradientBackground = 'linear-gradient(to right bottom, #FF7F00, #FF8900, #FF9200, #FF9C00, #FFA500, #FFAF00, #FFB900, #FFC300, #FFCD00, #FFD600, #FFDF00, #FFE900)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #ffc997, 0 0 12px 2px #ff9f00, 0px 10px 20px -5px black, 0 0 40px -30px #ff9f00, 0 0 50px -20px #ff9f00'; 
      pokemonTypes.forEach(type => {
        type.style.color = '#544F15'
      })
      break;

    case 'psychic':
      gradientBackground = 'linear-gradient(to right bottom, #A63F95, #A8559D, #A96DA5, #AC84AE, #B09CB6, #B4B3BE, #B9C9C6, #BED0C9, #C3D6CC, #C8DCCE, #CDE2D1, #D3E8D3)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #AA72A7, 0 0 12px 2px #8F4C93, 0px 10px 20px -5px black, 0 0 40px -30px #8F4C93, 0 0 50px -20px #8F4C93';
      pokemonTypes.forEach(type => {
        type.style.color = '#051937'
      })
      break;

    case 'dragon': 
      gradientBackground = 'linear-gradient(to right bottom, #A44A78, #B85885, #CA678F, #DB76A0, #ED85B1, #F493C0, #FAA1CD, #FFAFDA, #FFBBD9, #FFC6D8, #FFD2D7, #FFE1D6)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #ffb6c1, 0 0 12px 2px #ff91a8, 0px 10px 20px -5px black, 0 0 40px -30px #ff91a8, 0 0 50px -20px #ff91a8'; 
      pokemonTypes.forEach(type => {
        type.style.color = '#051937'
      })
      break;

    case 'fairy':  
      gradientBackground = 'linear-gradient(to right bottom, #FFC2E3, #FFC8E5, #FFCFE7, #FFD5E9, #FFDBEB, #FFE1ED, #FFE7EF, #FFEDF1, #FFF2F3, #FFF8F5, #FFFBF7, #FFFFFF)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #ffc3d6, 0 0 12px 2px #ff99b8, 0px 10px 20px -5px black, 0 0 40px -30px #ff99b8, 0 0 50px -20px #ff99b8'; 
      pokemonTypes.forEach(type => {
        type.style.color = '#051937'
      })
      break;

    case 'fighting':
      gradientBackground = 'linear-gradient(to right bottom, #A14747, #AA4E4E, #B35555, #BB5C5C, #C16363, #CA6A6A, #D37171, #DB7878, #E47F7F, #EE8686, #F78D8D, #FF9494)'; 
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #E78181, 0 0 12px 2px #E15252, 0px 10px 20px -5px black, 0 0 40px -30px #E15252, 0 0 50px -20px #E15252'; 
      pokemonTypes.forEach(type => {
        type.style.color = '#051937'
      })
      break;


    case 'ice':
      gradientBackground = 'linear-gradient(to right bottom, #AEDFF2, #9ED6ED, #8DCDE9, #7DC5E5, #6CBDE0, #5BB4DC, #4AADD7, #3BA5D2, #2A9DCE, #1994C9, #088CC4, #0084C0)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #86CAE7, 0 0 12px 2px #54BDD8, 0px 10px 20px -5px black, 0 0 40px -30px #54BDD8, 0 0 50px -20px #54BDD8';  
      pokemonTypes.forEach(type => {
        type.style.color = '#051937'
      })
      break;

    case 'grass':
      gradientBackground = 'linear-gradient(to right bottom, #92C843, #8BC141, #83B840, #7CAB3F, #74A43F, #6B9D3F, #62963F, #589F40, #4D9841, #429142, #378A44, #2C8245)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #92d289, 0 0 12px 2px #5cbc53, 0px 10px 20px -5px black, 0 0 40px -30px #5cbc53, 0 0 50px -20px #5cbc53';
      pokemonTypes.forEach(type => {
        type.style.color = '#051937'
      })
      break;

    case 'normal':
      gradientBackground = 'linear-gradient(to right bottom, #5A5C63, #61646C, #686D74, #6E727C, #747880, #7B7F84, #818487, #878A8A, #8E8D8E, #959091, #9C9394, #A49398)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #808386, 0 0 12px 2px #5c5f66, 0px 10px 20px -5px black, 0 0 40px -30px #5c5f66, 0 0 50px -20px #5c5f66';
      pokemonTypes.forEach(type => {
        type.style.color = '#051937'
      })
      break;

    case 'flying':
      gradientBackground = 'linear-gradient(to right bottom, #C2E8F5, #C8E7F0, #CFE5EC, #D5E3E7, #DBE1E2, #E0DEDD, #E6DCD9, #E9D6D4, #EDD0CF, #F1C9CA, #F4C2C4, #F7BBBF)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #DFC2BF, 0 0 12px 2px #A98785, 0px 10px 20px -5px black, 0 0 40px -30px #A98785, 0 0 50px -20px #A98785';
      pokemonTypes.forEach(type => {
        type.style.color = '#051937'
      })
      break;

    case 'steel':
      gradientBackground = 'linear-gradient(to right bottom, #B9B9B9, #AFAFAF, #A6A6A6, #9C9C9C, #929292, #888888, #7E7E7E, #737373, #676767, #5B5B5B, #4E4E4E, #404040)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #898989, 0 0 12px 2px #646464, 0px 10px 20px -5px black, 0 0 40px -30px #646464, 0 0 50px -20px #646464';
      pokemonTypes.forEach(type => {
        type.style.color = '#051937'
      })
      break;

    case 'ghost':
      gradientBackground = 'linear-gradient(to right bottom, #5C6C7E, #68778B, #748298, #809DA5, #8DAAAF, #9AB7BB, #A7C4C7, #B3D0D3, #BFDCE0, #CCE9EC, #D8F5F8, #E5FFFF)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #BFDCDF, 0 0 12px 2px #81BCC3, 0px 10px 20px -5px black, 0 0 40px -30px #81BCC3, 0 0 50px -20px #81BCC3';
      pokemonTypes.forEach(type => {
        type.style.color = '#051937'
      })
      break;

    case 'ground':
      gradientBackground = 'linear-gradient(to right bottom, #D9AE75, #D7A66F, #D59E69, #D29663, #D08E5C, #CE8656, #CC7E50, #CA764A, #C86E44, #C6663E, #C45E38, #C25732)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #CD8555, 0 0 12px 2px #B36B46, 0px 10px 20px -5px black, 0 0 40px -30px #B36B46, 0 0 50px -20px #B36B46';
      pokemonTypes.forEach(type => {
        type.style.color = '#051937'
      })
      break;

    case 'dark':
      gradientBackground = 'linear-gradient(to right bottom, #000000, #0A0A0A, #141414, #1E1E1E, #282828, #323232, #3C3C3C, #464646, #505050, #5A5A5A, #646464, #6E6E6E)';
      card.style.boxShadow = '0 0 3px -1px white, 0 0 3px 1px #565656, 0 0 12px 2px #565656, 0px 10px 20px -5px black, 0 0 40px -30px #565656, 0 0 50px -20px #565656';
      pokemonTypes.forEach(type => {
        type.style.color = '#051937'
      })
      break;

    default:
      gradientBackground = 'gray'; 
      break;
  }
  card.style.backgroundImage += gradientBackground;
}


