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
var cellArray = [];
var score = 0;


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
    cellArray.push($activeCell.attr('id'));
    $('#word-input').append($(this).text());
    console.log(cellArray);
    if (cellArray.length > 1) {
      checkAdjacency();
    }
  })
}

function resetBoard() {
  $('#word-input').text("");
  cellArray = [];
  $('.cell').css({
    "background-color": "rgb(219, 228, 245)"
  });
}

function checkAdjacency() {
  var current = cellArray[cellArray.length - 1];
  var prev = cellArray[cellArray.length - 2];
  var adjacent = true;

  if (current.charAt(0) === "a" && (prev.charAt(0) === "c" || prev.charAt(0) === "d")) {
    adjacent = false;
  } else if (current.charAt(0) === "b" && prev.charAt(0) === "d") {
    adjacent = false;
  } else if (current.charAt(0) === "c" && prev.charAt(0) === "a") {
      adjacent = false;
  } else if (current.charAt(0) === "d" && (prev.charAt(0) === "a" || prev.charAt(0) === "b")) {
    adjacent = false;
  } else if (current.charAt(1) == "1" && (prev.charAt(1) == "3" || prev.charAt(1) == "4")) {
    adjacent = false;
  } else if (current.charAt(1) == "2" && prev.charAt(1) == "4") {
    adjacent = false;
  } else if (current.charAt(1) == "3" && prev.charAt(1) == "1") {
    adjacent = false;
  } else if (current.charAt(1) == "4" && (prev.charAt(1) == "1" || prev.charAt(1) == "2")) {
    adjacent = false;
  }
  if (adjacent === false) {
    resetBoard();
  }
}

function addToScoreAndList(points) {
  score += points;
  var $wordToSubmit = $('#word-input').text();
  $('#score-display').text("Score: " + score)
  $('#words').append($('<li>').text($wordToSubmit));
  resetBoard();
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
