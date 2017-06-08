console.log("Sanity Check: JS is working!");
var pokemonContainer = document.getElementById("pokedex")

$(document).ready(function(){

    $("#add-button").click(function() {
      $(".new-pokemon").show();
      $("#add-button").hide();
    });

    $('#get-button').on('click', function(event) {
      event.preventDefault()
        $.ajax({
            method: 'GET',
            url: 'https://mutably.herokuapp.com/pokemon'
        }).done(function(data){
          var htmlString = "";

          for(i = 0; i < data.pokemon.length; i++) {
            var pokemonImages = "";
            var inputString = "";
            pokemonId = data.pokemon[i]._id;
            imageURL = data.pokemon[i].image

            pokemonImages+= "<img src=" + imageURL + ">"


            inputString += "<p hidden>" + pokemonId + "</p>" + "<form class='edit-info' hidden><input class='edit-info' value=" + data.pokemon[i].name +  "></input>" + "<input class='edit-info' value=" + data.pokemon[i].pokedex + "></input>" + "<input class='edit-info' value=" + data.pokemon[i].evolves_from + "></input>" + "<input type='submit' value='Save' class='save-button'" + "></input></form>"

            htmlString+= "<p class='pokemon-info'>" + "<strong>Name: </strong>" +data.pokemon[i].name + " " + "<strong>Pokédex Number: </strong>" + data.pokemon[i].pokedex + " " + "<strong>Evolves from: </strong>" + data.pokemon[i].evolves_from + " " + "</p>" + pokemonImages + "<input type='button' value='Edit' class='edit-button'></input>" + inputString
          }
          pokemonContainer.insertAdjacentHTML('beforeend', htmlString)


          $('.edit-button').on('click', function() {
            //want fields to pop up to edit pokemon information
            //working:
            $(this).hide();
            $(this).next('.save-button').show();

            //this is the p element of info hiding:
            // $(this).prevAll('.pokemon-info').hide();
            //how about the p element toggle class to edit-info?

            //temporarily commented out until we can figure out what's going on:
            //want fields to pop up where plain text is:
            // $(this).prevAll('.pokemon-info').hide()

            $(this).nextAll('.edit-info').show();
          });
        })
    });


    $(document).on('click', '.save-button', function() {;
      console.log(pokemonId);
      var updatedInfo = $('')
        $.ajax({
            method: 'PUT',
            url: 'https://mutably.herokuapp.com/pokemon'+ id,
      });
});
});
