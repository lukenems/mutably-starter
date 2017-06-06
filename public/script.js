console.log("Sanity Check: JS is working!");
  var ourRequest = new XMLHttpRequest();
  var pokemonContainer = document.getElementById("pokedex")
  var imageContainer = document.getElementById("pokedexImages")

  ourRequest.open('GET', 'https://mutably.herokuapp.com/pokemon');

  ourRequest.onload = function() {
    var pokedexData = JSON.parse(ourRequest.responseText);
    renderHTML(pokedexData);
  };
  ourRequest.send();
  function renderHTML(data) {
    var htmlString = "";
    // var pokemonImages = function() {
    // for(i = 0; i < data.pokemon.length; i++) {
    //   imageURL = data.pokemon[i].image
    //   pokemonImages+= "<img src=" + imageURL + ">"
    //   console.log(data.pokemon[i].image)
    // }}
    for(i = 0; i < data.pokemon.length; i++) {
      var pokemonImages = "";
      imageURL = data.pokemon[i].image
      pokemonImages+= "<img src=" + imageURL + ">"
      htmlString+= "<p>" + data.pokemon[i].name + " " + data.pokemon[i].pokedex + " " + data.pokemon[i].evolves_from + " " + "</p>" + pokemonImages

    }

    pokemonContainer.insertAdjacentHTML('beforeend', htmlString)
    pokemonContainer.insertAdjacentHTML('beforeend', pokemonImages)



  }
