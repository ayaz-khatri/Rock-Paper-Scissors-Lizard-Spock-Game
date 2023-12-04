let playerName = "";
let playerScore = 0;
let computerScore = 0;

function startGame() {
    playerName = document.getElementById("playerName").value;
    if(playerName == '')
    {
        playerName = "Player";
    }
    document.getElementById("gamePlay").style.display = "block";
    document.getElementById("playerName").style.display = "none";
    document.getElementById("gameStart").style.display = "none";
}

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Set up image sources
    const userChoiceImg = document.getElementById("userChoiceImg");
    const computerChoiceImg = document.getElementById("computerChoiceImg");

    userChoiceImg.src = `images/${playerChoice}.png`;
    computerChoiceImg.src = `images/${computerChoice}.png`;


    if (playerChoice === computerChoice) {
        modalResult.innerHTML = "<span class='message'>It's a tie!</span>";
    } else if (
        (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (playerChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
        (playerChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissors"))
    ) {
        modalResult.innerHTML = `<span class='message'>${playerName} wins!</span>`;
        playerScore++;
    } else {
        modalResult.innerHTML = `<span class='message'>Computer wins!</span>`;
        computerScore++;
    }

    // Update scores
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

}

function restartGame() {
    document.getElementById("gamePlay").style.display = "none";
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerName").style.display = "block";
    document.getElementById("gameStart").style.display = "block";
    document.getElementById("gameStart").style.marginLeft = "auto";
    document.getElementById("gameStart").style.marginRight = "auto";
    document.getElementById("playerName").style.marginLeft = "auto";
    document.getElementById("playerName").style.marginRight = "auto";
}
