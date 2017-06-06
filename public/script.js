console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  var ourRequest = new XMLHttpRequest();

  ourRequest.open('GET', 'https://mutably.herokuapp.com/pokemon');

  ourRequest.onload = function() {
    var pokedexData = JSON.parse(ourRequest.responseText);
    console.log(pokedexData);
    // renderHTML(pokedexData);
  };

  ourRequest.send();


});
