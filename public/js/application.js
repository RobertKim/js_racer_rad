function movePlayer(player_cell, player){
  $(player_cell).next().addClass('active');
  $(player_cell).prev().removeClass('active');
  if (gameFinished(player_cell)) {
    alert( player + " won!")
  }
}

function gameFinished(player_cell) {
  if ($(player_cell)[0].id === 'finish') {
    return true
  }
}

$(document).ready(function() {
  $(document).on('keyup', function(event){
    if (event.keyCode == 80) {
      var player1_cell = '#player1_strip .active';
      var player1 = "Player 1";
      movePlayer(player1_cell, player1)
    }
    if (event.keyCode == 81) {
      var player2_cell = '#player2_strip .active';
      var player2 = "Player 2";
      movePlayer(player2_cell, player2)
    }
  });
});


