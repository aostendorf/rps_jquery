$(document).ready( function() {

  /*function user_Choice() {
  /*var choice = 0
  var selection = $('.entry')*/


  $(".dropdown").on('change', function() {
    var player = $(this).prop("value")
    console.log(player)
    $('#selection').html("You have selected: " + player)
  })

  $("#play").on('click', function() {
    var options = ['Rock', 'Paper', 'Scissors']
    var comChoice = Math.floor(Math.random() * options.length)
    }
    
  })
})