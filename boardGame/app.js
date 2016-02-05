$(document).ready(function() {
  $('#message').slideToggle();

$('button').on('click',function(){
    var  $message =
    $message.slideToggle();
    $message.html('Each Player ');
});

choosePlayer();
$('div').find('#rollDice').on('click', chooseAndMove ) ;

/// i should change the player to current player with function


});   // Onload function ends here.



var currentPlayer = '';
function choosePlayer(){

      $('#player1').on('click', function(){
          currentPlayer = '#player1';
          $('#step1').append($(currentPlayer));
       return console.log('player 1 has chosen');
     }) ;

      $('#player2').on('click', function(){
          currentPlayer = '#player2';
          $('#step1').append($(currentPlayer));
          return console.log('player 2 has chosen');

      })
}


function chooseAndMove() {

  if (currentPlayer == "#player1") {
    player1.move() ;
    currentPlayer = "#player2" ;
    checkSteps();
  }else if (currentPlayer == "#player2") {
   player2.move();
   currentPlayer = "#player1" ;
   checkSteps();

  };

}



//Here I m creating an object literal.// I ll use to make a rolling effect.

var dice = {
  1 : './img/dice/1.gif',
  2 : './img/dice/2.gif',
  3 : './img/dice/3.gif',
  4 : './img/dice/4.gif',
  5 : './img/dice/5.gif',
  6 : './img/dice/6.gif',
}

var numberOfSteps;
rollThedice = function ()  {
    numberOfSteps =  Math.floor(Math.random() * 6 +1);
    $('#dice').attr('src', dice[numberOfSteps] );
    console.log(numberOfSteps)
    return numberOfSteps
};




// create an CONTRACTOR FUCNTION FOR EACH PLAYER

var Player = function (player) {

this.name = player;
this.currentStep = 1;
this.currentTile = '#step0';


 this.move = function ( ){
 // I need the result from the dice.  // I need the corrent place of the player
 var movingsteps = rollThedice();
 this.currentStep += movingsteps ;
 this.currentTile = '#step' + this.currentStep.toString();
 $(this.currentTile).append( $( this.name ) ) ;
 };

 this.nextTurn = function () {
   if (this.turn = false) {
     this.turn = true;
   }else {
     this.turn= false;
   }
 };



}





var player1 = new Player('#player1');
var player2 = new Player('#player2');


///Challenges:
function checkSteps() {

switch ( player1.currentTile || player2.currentTile ) {

case "#step3"   :
$('#challen1').css('display', 'block');

$('input').on('keydown',function (event) {
  if (event.keyCode == 13) {
    console.log('hit enter!' + player1.currentStep ||  player2.currentStep);
    var answer = $('#challenge1Answer').val()
    if (answer == '3'){
      console.log('true');
      $('#challen1').css('display', 'none');
    } else {
      console.log('false')
      $('#challen1').css('display', 'none');
    }
  }
});

break;

case "#step13"   :
$('#challen2').css('display', 'block');


$('input').on('keydown',function (event) {
  if (event.keyCode == 13) {
    console.log('hit enter!'+ player1.currentStep ||  player2.currentStep);
    var answer1 = $('#challenge2Answer').val()
    if (answer1 == 'closure'){
      console.log('true')
      $('#challen2').css('display', 'none');
    } else {
      console.log('false')
      $('#challen2').css('display', 'none');
    }
  }
});

break;

case "#step20"   :
$('#challen3').css('display', 'block');


$('input').on('keydown',function (event) {
  if (event.keyCode == 13) {
    console.log('hit enter!'+ player1.currentStep ||  player2.currentStep );
    var answer2 = $('#challenge3Answer').val  ()
    if (answer2 == '122' || "122"){
      console.log('true');
      $('#challen3').css('display', 'none');
    } else {
      console.log('false');
      $('#challen3').css('display', 'none');
    }
  }
});

break;



case "#step11"   :   //IMPLEMENT THE HANGMAN

break;


case "#step8"   :   //LUCKY TILE

break;



case "#step6"   :    //PICK A AGAME


break;


case "#step18"   : // PICK A GAME


break;


default         :
console.log("ordinary step");

} // this is closing swith statement.

}   // this is closing funtion.
