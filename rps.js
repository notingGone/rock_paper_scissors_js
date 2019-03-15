// while (playerScore < 5 || computerScore < 5) {

  var playerScore = 0
  var computerScore = 0
  var totalGames = 0
  function playerChoice(player) {
      // alert(str)
      var hand = ["rock", "paper", "scissors"]
      var randNum = Math.floor(Math.random() * 3)
      // console.log(randNum)
      var computer = hand[randNum]
      document.getElementById("compChoice").innerHTML = `I picked ${computer}.`
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
      // console.log(`playerScore: ${playerScore}`)
      // console.log(`computerScore: ${computerScore}`)
      // console.log(`totalGames: ${totalGames}`)
      document.getElementById("score").innerHTML = `Player: ${playerScore}<br>Computer: ${computerScore}<br>Total: ${totalGames}`
    }
// }

/*
num1 = 5 #ruby
var num2 = 7 // javascript



*/
