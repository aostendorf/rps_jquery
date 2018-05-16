$(document).ready( function() {

  /*function user_Choice() {
  /*var choice = 0
  var selection = $('.entry')*/

  var options = ['Rock', 'Paper', 'Scissors']
  $(".dropdown").on('change', function() {
    var player = $(this).prop("value")
    console.log(player)
    $('#selection').html("You have selected: " + player)
  })

  $("#play").on('click', function() {
    var comChoice = Math.floor(Math.random() * options.length)
    return options [index]
    })
    
  })