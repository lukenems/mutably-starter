console.log("Sanity Check: JS is working!");


// $(document).ready(function(){
  var ourRequest = new XMLHttpRequest();
  var pokemonContainer = document.getElementById("pokedex")

  ourRequest.open('GET', 'https://mutably.herokuapp.com/pokemon');

  ourRequest.onload = function() {
    var pokedexData = JSON.parse(ourRequest.responseText);
    // console.log(pokedexData);
    // pokemonContainer.insertAdjacentHTML('beforeend', pokedexData.pokemon[0].name);
    renderHTML(pokedexData);
  };
  ourRequest.send();
  function renderHTML(data) {
    var htmlString = "";
    for(i = 0; i < data.pokemon.length; i++) {
      htmlString+= "<p>" + data.pokemon[i].name + "</p>"
    }
    pokemonContainer.insertAdjacentHTML('beforeend', htmlString)

  }

// });
