function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function compareSelections (computer, computerSelect)
{
    if (computer == computerSelect) 
    {
        return "Computer won!";
    }
    else return "Player won!";
}

function playRound () {
    let player = prompt("Choose your weapon!", "").toLowerCase();
    let computer = getComputerChoice();

    console.log("Player selected " + player);
    console.log("Computer selected " + computer);

    if (player == computer) return "tie!";
    else if (player == "rock") return compareSelections(computer, "paper");
    else if (player == "scissors") return compareSelections(computer, "rock");
    else return compareSelections(computer, "scissors");
}

function game () 
{
    let pScore  = 0;
    let cScore  = 0;
    for (let i = 1; i <= 5; i++)
    {
        let winner = playRound();
        if (winner == "Computer won!") cScore++;
        else if (winner == "Player won!") pScore++;
        console.log ("Round " + i + ": " + winner);
    }

    if (pScore > cScore) console.log("The winner is Player!");
    else if (pScore < cScore) console.log("The winner is Computer!");
    else console.log("We got a tie here!");

}

game();
