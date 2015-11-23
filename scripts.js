console.log("...loaded")

var dice = [
  ["A","A","E","E","G","N"],
  ["E","L","R","T","T","Y"],
  ["A","O","O","T","T","W"],
  ["A","B","B","J","O","O"],
  ["E","H","R","T","V","W"],
  ["C","I","M","O","T","U"],
  ["D","I","S","T","T","Y"],
  ["E","I","O","S","S","T"],
  ["D","E","L","R","V","Y"],
  ["A","C","H","O","P","S"],
  ["H","I","M","N","Q","U"],
  ["E","E","I","N","S","U"],
  ["E","E","G","H","N","W"],
  ["A","F","F","K","P","S"],
  ["H","L","N","N","R","Z"],
  ["D","E","I","L","R","X"]
]

var diceDisplayed = [];


$('.start-button').on('click', playBoggle);

function playBoggle() {
  setBoard();
  makeWord();
  submitWord();
}

function setTimer(limit) {
  // Sets timer depending on button clicked.
  // Displays countdown above board-area
  // Stops gameplay when time runs out
}

function setBoard() {
  // generates random boggle board
  for (var i = 0; i < dice.length; i++) {
    diceDisplayed[i] = dice[i][(Math.floor(Math.random()*6))];
  }
  for (var i = 0; i < diceDisplayed.length; i++) {
    $('.cell:eq(' + i + ')').text(diceDisplayed[i]);
  }
}

function makeWord() {
  $('#word-input').text("");
  $('.cell').on('click', function(e){
    var $activeCell = $(e.target);
    $activeCell.css({
      "background-color": "rgb(244, 236, 164)"
    });
    $('#word-input').append($(this).text());
  })
}

var score = 0;

function addToScoreAndList(points) {
  score += points;
  var $wordToSubmit = $('#word-input').text();
  $('#score-display').text("Score: " + score)
  $('#words').append($('<li>').text($wordToSubmit));
  $('#word-input').text("");
  $('.cell').css({
    "background-color": "rgb(219, 228, 245)"
  });
}

function submitWord() {
    $(document).on('keypress', function(e){
      if (e.keyCode == "13") {
        var $wordToSubmit = $('#word-input').text();
        if ($wordToSubmit.length < 3) {
          $('#word-input').text("");
        } else if ($wordToSubmit.length === 3 || $wordToSubmit.length === 4) {
          addToScoreAndList(1);
        } else if ($wordToSubmit.length === 5) {
          addToScoreAndList(2);
        } else if ($wordToSubmit.length === 6) {
          addToScoreAndList(3);
        } else if ($wordToSubmit.length === 7) {
          addToScoreAndList(4)
        } else if ($wordToSubmit.length > 7) {
          addToScoreAndList(7)
        }
      }
    })
}
