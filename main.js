$(document).ready( function() {

  /*function user_Choice() {
  /*var choice = 0
  var selection = $('.entry')*/

  
  $(".dropdown").on('change', function() {
    var player = $(this).prop("value")
    console.log(player)
    $('#selection').html("You have selected: " + player)
  })

  $(".play").on('click', function() {
    var elements = ["Rock", "Paper", "Scissors"]
    var computer = elements[Math.floor(Math.random() * elements.length)]
    console.log(computer)
    $('computerPick').html("The computer chose: " + computer)    
  })
})