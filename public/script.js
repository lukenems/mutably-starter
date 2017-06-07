console.log("Sanity Check: JS is working!");
  // var ourRequest = new XMLHttpRequest();
  // var pokemonContainer = document.getElementById("pokedex")
  //
  // ourRequest.open('GET', 'https://mutably.herokuapp.com/pokemon');
  //
  // ourRequest.onload = function() {
  //   var pokedexData = JSON.parse(ourRequest.responseText);
  //   renderHTML(pokedexData);
  // };
  // ourRequest.send();
  // function renderHTML(data) {
  //   var htmlString = "";
  //   for(i = 0; i < data.pokemon.length; i++) {
  //     var pokemonImages = "";
  //     imageURL = data.pokemon[i].image
  //
  //     pokemonImages+= "<img src=" + imageURL + ">"
  //
  //     htmlString+= "<p>" + "<strong>Name: </strong>" +data.pokemon[i].name + " " + "<strong>Pokédex Number: </strong>" + data.pokemon[i].pokedex + " " + "<strong>Evolves from: </strong>" + data.pokemon[i].evolves_from + " " + "</p>" + pokemonImages + "<button>Edit</button>"
  //
  //   }
  //   pokemonContainer.insertAdjacentHTML('beforeend', htmlString)
  // }

  function getAllPokemon() {
    // GET/READ
    $('#get-button').on('click', function() {
      console.log("hooray jquery")
        $.ajax({
            method: 'GET',
            url: 'https://mutably.herokuapp.com/pokemon',
        }).done(function(data){
          console.log("hooray ajax from the warriors, movie not the basketaball team. Also, the soap thing.")

        })
    });
  };

  // function handleResponse(response) {
  //   console.log("hooray ajax from the warriors, movie not the basketaball team. Also, the soap thing.")
  //     var pokedex = $('#pokedex');
  //
  //     pokedex.html('');
  //
  //     response.pokemon.forEach(function(pokemon) {
  //         pokedex.append('\
  //         <img src="' + pokemon.image + ' ">\
  //         <p> + <strong>Name: </strong>' + pokemon.name + ' " + <strong>Pokédex Number: </strong> ' + pokemon.pokedex + ' + <strong>Evolves from: </strong> ' + pokemon.evolves_from + '  + </p> + <button>Edit</button>\
  //         ');
  //     });
  // }
