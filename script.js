let pScore = 0, cScore = 0;
let p = '', c = '';

const btnStart = document.querySelector('.button-start');
btnStart.addEventListener('click', function () {
    pScore = 0, cScore = 0;
    document.querySelector('body').style.backgroundColor = 'rgb(' + 221 + ',' + 179 + ',' + 212 + ')';
    document.querySelector('.para-score').textContent = `${pScore} - ${cScore}`;
    for (let image of document.getElementsByTagName('img'))
    {
        image.style.borderColor = "black";
        image.style.pointerEvents = "auto";
    }
})

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

btnRock.addEventListener('click', function () {
    for (let image of document.getElementsByTagName('img'))
    {
        image.style.borderColor = "black";
    }
    p = btnRock.id;
    c = getComputerChoice();
    playRound(p, c);
});

btnPaper.addEventListener('click', function () {
    for (let image of document.getElementsByTagName('img'))
    {
        image.style.borderColor = "black";
    }
    p = btnPaper.id;
    c = getComputerChoice();
    playRound(p, c);
});

btnScissors.addEventListener('click', function () {
    for (let image of document.getElementsByTagName('img'))
    {
        image.style.borderColor = "black";
    }
    p = btnScissors.id;
    c = getComputerChoice();
    playRound(p, c);
});

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
    {
        document.querySelector('.para-score').textContent = `${pScore} - ${cScore}`;
        document.getElementById(p).style.borderColor = "blue";
        document.getElementById(`computer-${c}`).style.borderColor = "blue";
    }
    else if (playerSelection == "rock") compareSelections (computerSelection, "paper");
    else if (playerSelection == "scissors") compareSelections(computerSelection, "rock");
    else compareSelections(computerSelection, "scissors");

    if (pScore == 5) 
    {
        document.querySelector('.para-score').textContent = `${pScore} - ${cScore}; you won!`;
        for (let image of document.getElementsByTagName('img'))
        {
            image.style.borderColor = "black";
            image.style.pointerEvents = "none";
        }
        document.querySelector('body').style.backgroundColor = 'rgb(' + 141 + ',' + 223 + ',' + 103 + ')';
    }

    if (cScore == 5) 
    {
        document.querySelector('.para-score').textContent = `${pScore} - ${cScore}; you lost!`;
        for (let image of document.getElementsByTagName('img'))
        {
            image.style.borderColor = "black";
            image.style.pointerEvents = "none";
        }        
        document.querySelector('body').style.backgroundColor = 'rgb(' + 187 + ',' + 186 + ',' + 180 + ')';
    }
}

function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function compareSelections (computer, computerSelect)
{
    if (computer == computerSelect) 
    {
        cScore++;
        document.querySelector('.para-score').textContent = `${pScore} - ${cScore}`;
        document.getElementById(p).style.borderColor = "red";
        document.getElementById(`computer-${c}`).style.borderColor = "green";

    }
    else 
    {
        pScore++;
        document.querySelector('.para-score').textContent = `${pScore} - ${cScore}`;
        document.getElementById(p).style.borderColor = "green";
        document.getElementById(`computer-${c}`).style.borderColor = "red";
    }
}