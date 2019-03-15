var playerScore = 0
var computerScore = 0
var totalGames = 0
function playerChoice(player) {
  var hand = ["rock", "paper", "scissors"]
  var randNum = Math.floor(Math.random() * 3)
  var computer = hand[randNum]
  document.getElementById("comp-choice").innerHTML = `I picked ${computer}.`
  if (player == computer) {
    document.getElementById("result").innerHTML = 'Tie Game!'
  }
  else if ((player == "rock" && computer == "paper") || (player == "paper" && computer == "scissors") || (player == "scissors" && computer == "rock")) {
    document.getElementById("result").innerHTML = 'I beat you this time. Too easy.'
    computerScore++
  }
  else if ((computer == "rock" && player == "paper") || (computer == "paper" && player == "scissors") || (computer == "scissors" && player == "rock")) {
    document.getElementById("result").innerHTML = 'You beat me this time. *cough*cough*CHEATER*cough*'
    playerScore++
  }
  totalGames++
  document.getElementById("score").innerHTML = `Player: ${playerScore}<br>Computer: ${computerScore}<br>Total: ${totalGames}`
  if ((playerScore == 3 || computerScore == 3 || totalGames >= 5) && playerScore != computerScore) {
    // var rpsButtons = document.getElementsByClassName("btn-default")
    // var i
    // for (i = 0; i < rpsButtons.length; i++) {
    //   rpsButtons[i].disabled = true
    // }
    document.getElementById("btn-rock").disabled = true
    document.getElementById("btn-paper").disabled = true
    document.getElementById("btn-scissors").disabled = true
    if (playerScore > computerScore) {
      gameEndMessage = "Congratulations, you won best of 5 games.<br>Humans cheat."
    }
    else {
      gameEndMessage = "Sorry, Computer won best of 5 games.<br>Machines are superior to humans."
    }
    document.getElementById("game-end-message").innerHTML = gameEndMessage
  }
}

function resetGame() {
  // var rpsButtons = document.getElementsByClassName("btn btn-default")
  // var i
  // for (i = 0; i < rpsButtons.length; i++) {
  //   rpsButtons[i].disabled = false
  // }
  playerScore = 0
  computerScore = 0
  totalGames = 0
  document.getElementById("btn-rock").disabled = false
  document.getElementById("btn-paper").disabled = false
  document.getElementById("btn-scissors").disabled = false
  document.getElementById("comp-choice").innerHTML = ''
  document.getElementById("result").innerHTML = ''
  document.getElementById("score").innerHTML = 'Player: 0<br>Computer: 0<br>Total: 0'
  document.getElementById("game-end-message").innerHTML = ''
}
