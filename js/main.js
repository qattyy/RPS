


let gameOutcome; // created a variable to determine winner

function roundOne(){ // function for the game to play one round

    let userChoice = prompt("Please enter either rock, paper or scissors") // created a variable which stores what the user inputs through prompt

    userChoice = userChoice.toLowerCase() // converts whatever the user types into lowercase to prevent mismatch

    console.log(userChoice) // displays what the user selected

    let computerChoices = ["rock","paper", "scissors"] // created an array with the three choices of RPS
    
    let computerChoice = computerChoices[Math.floor(Math.random()* 3)] // randomise the number in [], so that it cycles between 0-2  selecting each option at random. math floor makes sure that is a whole number, and math random picks a number between 0-3

    console.log(computerChoice) // displays the computer choice

    

    if (userChoice === "paper" && computerChoice === "rock"){ // if the user picks paper & computer picks rock
        gameOutcome = "a" // the game outcome will be a - which is the user wins and it helps me add score as i used it as a condition
    } else if (userChoice === "scissors" && computerChoice ==="paper"){ // if the user picks scissors and computer picks paper
        gameOutcome = "a" // the game outcome will be a - which is the user wins and it helps me add score as i used it as a condition
    } else if (userChoice ==="rock" && computerChoice ==="scissors"){ //if the user picks rock and the computer picks scissors
        gameOutcome = "a" // the game outcome will be a - which is the user wins and it helps me add score as i used it as a condition
    } else if (userChoice === computerChoice){ // if the user picks the same as the computer which is a draw
    } else{
        gameOutcome = "b" // the game outcome will be a - which is the user wins and it helps me add score as i used it as a condition
    }
}


let userScore = 0;
let compScore = 0;

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



