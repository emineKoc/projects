$(document).ready(function() {
  $('#message').slideToggle();
<<<<<<< HEAD

$('button').on('click',function(){
    var  $message =
    $message.slideToggle();
    $message.html('Each Player ');
});
=======

  $('button').on('click', function(){
    $('#message').slideToggle();
  });

  choosePlayer();
>>>>>>> dev

  $('div').find('#rollDice').on('click', chooseAndMove ) ;


});   // Onload function ends here.



var currentPlayer = '';
function choosePlayer(){

  $('#player1').on('click', function(){
    currentPlayer = '#player1';
    $('#step1').append($(currentPlayer));
    return ;
  }) ;

  $('#player2').on('click', function(){
    currentPlayer = '#player2';
    $('#step1').append($(currentPlayer));
    return ;

  })
}


function chooseAndMove() {

  if (currentPlayer == "#player1") {
    player1.move() ;
    checkSteps(player1);
    currentPlayer = "#player2" ;

  }else if (currentPlayer == "#player2") {
    player2.move();
    checkSteps(player2);
    currentPlayer = "#player1" ;

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
 if (this.currentStep > 20 ) {
   $('#winner').css('display', 'block');
   $('#winner').append( $( this.name ) );
   $( this.name ).addClass('winning')
 };
};

}




function winnerMove(x){

  x.currentStep += 2;
  x.currentTile = '#step' + x.currentStep.toString();
  $(x.currentTile).append( $( x.name ) ) ;
}


function looserMove(x){
  x.currentStep -= 2;
  x.currentTile = '#step' + x.currentStep.toString();
  $(x.currentTile).append( $( x.name ) ) ;
}





var player1 = new Player('#player1');
var player2 = new Player('#player2');


///Challenges:
function checkSteps(playerx) {

//   currentPlayer  can ve "#player1" or "#player2"

switch ( playerx.currentTile ) {

  case "#step3"   :
  $('#challen1').css('display', 'block');

  $('input').on('keydown',function (event) {
    if (event.keyCode == 13) {
      var answer = $('#challenge1Answer').val()
      if (answer == '3'){
        $('#challen1').css('display', 'none');
        winnerMove(playerx);

      } else {
        $('#challen1').css('display', 'none');
        looserMove(playerx);
      }
    }
  });

  break;

  case "#step13"   :
  $('#challen2').css('display', 'block');


  $('input').on('keydown',function (event) {
    if (event.keyCode == 13) {
      var answer1 = $('#challenge2Answer').val()
      if (answer1 == 'closure'){
        $('#challen2').css('display', 'none');
        winnerMove(playerx)
      } else {
        $('#challen2').css('display', 'none');
        looserMove(playerx);
      }
    }
  });

  break;

  case "#step20"   :
  $('#challen3').css('display', 'block');

  $('input').on('keydown',function (event) {
    if (event.keyCode == 13) {
      var answer2 = $('#challenge3Answer').val  ()
      if (answer2 === '122' || "122"){
        $('#challen3').css('display', 'none');
        winnerMove(playerx);
      } else {
        $('#challen3').css('display', 'none');
        looserMove(playerx);
      }
    }
  });

  break;

  case "#step11"   :   //IMPLEMENT THE HANGMAN

  break;


  case "#step8"   :   //LUCKY TILE
  winnerMove(playerx);


  break;



  case "#step6"   :    //PICK A AGAME


  break;


  case "#step18"   : // PICK A GAME


  break;

  case "#step20"   : // PICK A GAME


  break;


  default         :
  console.log("ordinary step");

} // this is closing swith statement.

}   // this is closing funtion.
