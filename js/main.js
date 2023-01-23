let gameOutcome; // created a variable to determine winner
let userScore = 0;
let compScore = 0;
let roundPlayed = 0;

// Gameplay functionality of RPS
function roundOne(userChoice,computerChoice){ // function for the game to play one round

    if (userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "rock" && computerChoice === "scissors"){
        userScore++
        document.querySelector('#results').innerText = `You win! your score is now ${userScore} and Computer Score is ${compScore}`
        
    } else if (userChoice === computerChoice){
        compScore++
        document.querySelector('#results').innerText = `You lose! your score is now ${userScore} and Computer Score is ${compScore}`
    } else{
        document.querySelector('#results').innerText = `You draw! your score is now ${userScore} and Computer Score is ${compScore}`
    }

    roundPlayed++

    document.querySelector('#rounds').innerText = `Round ${roundPlayed}`

    if(roundPlayed === 5){
        document.getElementById("restartBtn").style.display = "block";
        document.querySelector('#results').innerText = `The final score is User: ${userScore} & Computer ${compScore}`;
        if (userScore > compScore){
            document.querySelector('#finalfinalresults').innerText = `Congrats! You won! Please restart the game by pressing the button below!`;
        } else if (compScore > userScore){
            document.querySelector('#finalfinalresults').innerText = `The winner is the computer! Please restart the game by pressing the button below!`;
        } else{
            document.querySelector('#finalfinalresults').innerText = `It's a draw! Please restart the game by pressing the button below!`;
        }
    }
}

document.querySelector('#restartBtn').addEventListener('click', restartGame)
document.getElementById("restartBtn").style.display = "none";

function restartGame(){
    userScore = 0;
    compScore = 0;
    roundPlayed = 0;
    document.querySelector('#finalfinalresults').innerText = "";
    document.querySelector('#results').innerText = ``;
    document.querySelector('#rounds').innerText = ``
    document.getElementById("restartBtn").style.display = "none";
}



//assigning a variable to ALL of the buttons created in HTML
const userSelection = document.querySelectorAll('[data-selection]') // assign the variable userSelection to the buttons declared in html, data selection would select the data selections declared in html.

//Loops through each button, makes them clickable and also console logs what the user selects
    userSelection.forEach(userSelect => { // for each of the data selection, i.e. rock, paper, scissors. which is now in an array, select each one and do the below to them
        userSelect.addEventListener('click', e => { // makes the buttons clickable and assigns the function of e which is the event
        const selectionName = userSelect.dataset.selection // assigns a variable to each ONE of the dataselections, so this will either equal rock,paper, or scissors.
        makeSelection(selectionName)

        let possibleChoices = ["rock","paper", "scissors"] // created an array with the three choices of RPS
        let computerChoices = possibleChoices[Math.floor(Math.random()* 3)] // randomise the number in [], so that it cycles between 0-2  selecting each option at random. math floor makes sure that is a whole number, and math random picks a number between 0-3
        console.log(computerChoices) // displays the computer choice

        roundOne(selectionName, computerChoices)
    })
})


function makeSelection(selection){
    console.log(selection)
}

