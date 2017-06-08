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

        htmlString+= "<p class='pokemon-info'>" + "<strong>Name: </strong>" +data.pokemon[i].name + " " + "<strong>Pokédex Number: </strong>" + data.pokemon[i].pokedex + " " + "<strong>Evolves from: </strong>" + data.pokemon[i].evolves_from + " " + "</p>" + pokemonImages + "<input type='button' value='Edit' class='edit-button'></input>" + "<input type='button' value='Save' class='save-button' hidden></input>"
      }
      pokemonContainer.insertAdjacentHTML('beforeend', htmlString)

      $('.edit-button').on('click', function() {
        console.log('please work.')
        $(this).hide();
        $(this).next('.save-button').show();
        $(this).prevAll('.pokemon-info').hide();
        // $('.save-button').show();
      });
    })
});
