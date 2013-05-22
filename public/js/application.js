function Player(initials) {
  this.initials = initials;
  this.position = 1;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.winner = {};
  this.boardLength = 25;

  if (typeof player1 === 'undefined' ||
    typeof player2 === 'undefined') {
    throw new Error('Player required to start game');
}
}

Game.prototype.resetBoard = function(){
  $('td').removeClass('active');
  $('#player1_strip td:first-child').addClass('active');
  $('#player2_strip td:first-child').addClass('active');
  $('#button2').show();
}

Player.prototype.advance = function(){
  this.position = this.position + 1;
};

Player.prototype.my_position = function(){
  console.log(this.initials + " has the position of " + this.position);
};

function movePlayer(player_cell, player){
  $(player_cell).next().addClass('active');
  $(player_cell).prev().removeClass('active');
  if (gameFinished(player_cell)) {
    console.log(player.position);
    console.log("hello");
    alert( player.initials + " won! Play again!");
    
    game.resetBoard();
  }
}

function gameFinished(player_cell) {
  if ($(player_cell)[0].id === 'finish') {
    return true;
  }
}

$(document).ready(function() {
  var player1, player2;
  $('.racer_table').hide();
  $('#button2').hide();
  $('form.signup').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      url: "/signup",
      type: "post",
      dataType: 'json',
      data: $(this).serialize()
    }).done(function(data) {
      player1 = new Player(data.player1);
      player2 = new Player(data.player2);
      game = new Game(player1,player2);
      $('.racer_table').show();
      $('.span11').hide();

      console.log("callback triggerd");
      $(document).on('keyup', function(event){
        // console.log("keypup triggered");
        if (player1.position === game.boardLength){
          game.winner = player1;
          
        } else {
          game.winner = player2;
         
        }

        if (event.keyCode == 80) {
          var player1_cell = '#player1_strip .active';
            // var player1 = "Player 1";
            console.log(player1);
            console.log("should be player above");
            movePlayer(player1_cell, player1);
          }
          if (event.keyCode == 81) {
            var player2_cell = '#player2_strip .active';
            // var player2 = "Player 2";
            movePlayer(player2_cell, player2);
          }
        });
    });
  });



});




// _____________________________________

// function Player(name, playerNumber){
//   this.name = name;
//   this.number = playerNumber;
//   this.position = 0;
// };

// function Track(trackId, player){
//   this.trackId = trackId;
//   this.trackLength = 12;
//   this.player = player;

//   this.initialize = function(){
//     this.render();
//   };
//   this.initialize();
// };

// Track.prototype.render = function(){
//   $("#player"+ this.trackId +"_strip td").removeClass('active')
//   var cells = "";
//   for (var i=0; i<this.trackLength; i++){
//     cells += "<td></td>";
//   };
//   $('table.racer_table').append("<tr id='player"+ this.trackId +"_strip'></tr>");
//   var track = $("#player"+ this.trackId +"_strip")
//   track.append(cells);
//   $(track.find('td')[this.player.position]).addClass('active')
// };


// $(document).ready(function(){
//   var player1 = new Player('Robert')
//   var player2 = new Player('Fei')
//   var track1 = new Track(1, player1)
//   var track2 = new Track(2, player2)

//   $('table').on('keyup', function(){
//     if key is x
//       track1.player.advance()
//       track1.render()
//     else key is y
//       track2.player.advance()
//       track2.render()
//     end
//   })
// });

// var Add = function(num1, num2) { 
//   return num1 + num2 
// }











































