


let gameOutcome;

function roundOne(){

    let userChoice = prompt("Please enter either rock, paper or scissors")

    userChoice = userChoice.toLowerCase()

    console.log(userChoice)

    let computerChoices = ["rock","paper", "scissors"] // created an array with the three choices of RPS
    
    let computerChoice = computerChoices[Math.floor(Math.random()* 3)] // randomise the number in [], so that it cycles between 0-2  selecting each option at random. math floor makes sure that is a whole number, and math random picks a number between 0-3

    console.log(computerChoice)

    

    if (userChoice === "paper" && computerChoice === "rock"){
        gameOutcome = "a"
        console.log("User has won the game")
    } else if (userChoice === "scissors" && computerChoice ==="paper"){
        gameOutcome = "a"
        console.log("User has won the game")
    } else if (userChoice ==="rock" && computerChoice ==="scissors"){
        gameOutcome = "a"
        console.log("User has won the game")
    } else if (userChoice === computerChoice){
        console.log("It is a draw")
    } else{
        gameOutcome = "b"
        console.log("Computer has won the game")
    }
}


let userScore = 0;
let compScore = 0;

function multipleRounds(){
    for(let i = 1; i <= 5; i++){
        roundOne()

        if(gameOutcome === "a"){
            console.log(`1 point to the User`)
            userScore++
        } else if (gameOutcome === "b"){
            console.log(`1 point to the computer`)
            compScore++
        } else{
            console.log("It's a draw! No points scored")
        }
    }

    console.log(`The final score is User: ${userScore} & Computer ${compScore}`)
}

multipleRounds()

