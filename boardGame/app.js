$(document).ready(function() {

// rollThedice()

$('button').on('click', function(){
    $('#step1').append( $('#player1') )    /// i should change the player to current player with function
});

$('p').on('click', function() {
move()

});





});


//I ll use to make a rolling effect.
var dice = {
  1 : './img/dice/1.gif',
  2 : './img/dice/2.gif',
  3 : './img/dice/3.gif',
  4 : './img/dice/4.gif',
  5 : './img/dice/5.gif',
  6 : './img/dice/6.gif',
}


// for (var i  = 1; i < 7 ; i++) {
//      $('img').find('#dice').attr('src', dice[i])
// }


var numberOfSteps;
function rollThedice()  {
    numberOfSteps =  Math.floor(Math.random() *6+ 1 )
    $('#dice').attr('src', dice[numberOfSteps] );
    return numberOfSteps
}

var currentStep = 1;

function move() {
// I need the result from the dice.
// I need the corrent place of the player
currentStep += rollThedice();
var currentTile = '#step' + currentStep.toString();
$(currentTile).append( $('#player1') ) ;

}
