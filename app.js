let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
// const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". YOU WIN!!!";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ". YOU LOSE!!!";
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(computerChoice) + " is the same as " + convertToWord(userChoice) + ". YOU DRAW!!!";
}

function reset() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = ''

}
function getComputerChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


getComputerChoice();

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rp":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rs":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

game();

function main () {
    rock_div.addEventListener('click',() => {
        console.log("You clicked Rock")
        game("r");
    })

    paper_div.addEventListener('click',() => {
        console.log("You clicked Paper")
        game("p");
    })

    scissors_div.addEventListener('click',() => {
        console.log("You clicked Scissors")
        game("s");
    })
}

main();


