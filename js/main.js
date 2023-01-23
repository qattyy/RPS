let gameOutcome; // created a variable to determine winner
let userScore = 0;
let compScore = 0;



function roundOne(userChoice,computerChoice){ // function for the game to play one round

    /* if (userChoice === "paper" && computerChoice === "rock"){ // if the user picks paper & computer picks rock
        gameOutcome = "a" // the game outcome will be a - which is the user wins and it helps me add score as i used it as a condition
        console.log("Player wins")
    } else if (userChoice === "scissors" && computerChoice ==="paper"){ // if the user picks scissors and computer picks paper
        gameOutcome = "a" // the game outcome will be a - which is the user wins and it helps me add score as i used it as a condition
        (console.log("Player Wins"))
    } else if (userChoice ==="rock" && computerChoice ==="scissors"){ //if the user picks rock and the computer picks scissors
        gameOutcome = "a" // the game outcome will be a - which is the user wins and it helps me add score as i used it as a condition
        console.log("Player Wins")
    } else if (userChoice === computerChoice){ // if the user picks the same as the computer which is a draw
    } else{
        gameOutcome = "b" // the game outcome will be a - which is the computer wins and it helps me add score as i used it as a condition
    } */


    if (userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "rock" && computerChoice === "scissors"){
        console.log("Player Wins!")
    } else if (userChoice === computerChoice){
        console.log("It's a draw!")
    } else{
        console.log("Computer Wins!")
    }

}

const userSelection = document.querySelectorAll('[data-selection]') // assign the variable userSelection to the buttons declared in html, data selection would select the data selections declared in html.

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








    function multipleRounds(){
    for(let i = 1; i <= 5; i++){
        roundOne()

        if(gameOutcome === "a"){
            userScore++
            console.log(`1 point to the User, the current score is User: ${userScore} & Computer ${compScore}`)
            
        } else if (gameOutcome === "b"){
            compScore++
            console.log(`1 point to the computer, the current score is User: ${userScore} & Computer ${compScore}`)
           
        } else{
            console.log("It's a draw! No points scored")
        }
    }


    if (userScore > compScore){
        console.log(`The winner is the user!`)
    } else if (compScore > userScore){
        console.log(`The computer has won!`)
    } else{
        console.log("It's a draw!")
    }
    console.log(`The final score is User: ${userScore} & Computer ${compScore}`)
}
