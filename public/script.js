console.log("Sanity Check: JS is working!");
var pokemonContainer = document.getElementById("pokedex")

$(document).ready(function(){

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

            htmlString+= "<p class='pokemon-info'>" + "<strong>Name: </strong>" +data.pokemon[i].name + " " + "<strong>Pokédex Number: </strong>" + data.pokemon[i].pokedex + " " + "<strong>Evolves from: </strong>" + data.pokemon[i].evolves_from + " " + "</p>" + pokemonImages + "<input type='button' value='Edit' class='edit-button'></input><input type='button' value='Delete' class='btn btn-danger' id='delete-button'></input>" + inputString
          }
          pokemonContainer.insertAdjacentHTML('beforeend', htmlString)

//EDIT STUFF - not working
          $('.edit-button').on('click', function() {
            $(this).hide();
            $(this).next('.save-button').show();
            $(this).nextAll('.edit-info').show();
          });
        })
    });

    $('#create-form').on('submit', function(event) {
      event.preventDefault();
      var createName = $('#name-input').val();
      var createNumber = $('#number-input').val();
      var createEvolvesFrom = $('#evolvesfrom-input').val();
      var createImgUrl = $('#imageurl-input').val();

//Can add pokemon, but you have to click "Catch em all" again to see the new ones.
      $.ajax({
        url: 'https://mutably.herokuapp.com/pokemon',
        method: 'POST',
        data: "name=" + createName + '&' + "pokedex=" + createNumber + '&' + "evolves_from=" + createEvolvesFrom + '&' + "image=" + createImgUrl,
        success: function(response) {
          $('#name-input').val('Name');
          $('#number-input').val('Number');
          $('#evolvesfrom-input').val('Evolves From');
          $('#imageurl-input').val('Image URL')
        }
      })
      location.reload();
    });

$('#delete-button').on('click', function() {
  console.log("something");
  var id = pokemonId;
  $(this).prevAll(id);
  console.log(id);
  $.ajax({
      url: 'https://mutably.herokuapp.com/pokemon/' + id,
      method: 'DELETE',
      success: function(response) {
          console.log(response);
          $('#get-button').click();
      }
  });
});



    $('#name-input').on('click', function() {
      $('#name-input').val('');
    });
    $('#number-input').on('click', function() {
      $('#number-input').val('');
    });
    $('#evolvesfrom-input').on('click', function() {
      $('#evolvesfrom-input').val('');
    });
    $('#imageurl-input').on('click', function() {
      $('#imageurl-input').val('');
    });

});
