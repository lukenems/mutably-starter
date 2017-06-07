console.log("Sanity Check: JS is working!");
    var pokemonContainer = document.getElementById("pokedex")
    $('#get-button').on('click', function() {
      console.log("hooray jquery")
        $.ajax({
            method: 'GET',
            url: 'https://mutably.herokuapp.com/pokemon'
        }).done(function(data){
          var htmlString = "";
          for(i = 0; i < data.pokemon.length; i++) {
            var pokemonImages = "";
            imageURL = data.pokemon[i].image

            pokemonImages+= "<img src=" + imageURL + ">"

            htmlString+= "<p>" + "<strong>Name: </strong>" +data.pokemon[i].name + " " + "<strong>Pokédex Number: </strong>" + data.pokemon[i].pokedex + " " + "<strong>Evolves from: </strong>" + data.pokemon[i].evolves_from + " " + "</p>" + pokemonImages + "<button>Edit</button>"
          }
          pokemonContainer.insertAdjacentHTML('beforeend', htmlString)
        })
    });
