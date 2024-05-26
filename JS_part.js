//Getting element tag from html to js
let userscore = 0;
let compScore = 0;
let totalRound = 0;
let userScorePara = document.querySelector("#User-score");
let compScorePara = document.querySelector("#Comp-score");
let rounds = document.querySelector("#rounds");
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");


//Generating computer choice using array and math function
const genCompChoice= ()=>{
    const options = ["stone","paper","scissors"];
    const randindx = Math.floor(Math.random() * 3);
    return options[randindx];
}


//Building logic, how game will work
const playGame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    const compchoice = genCompChoice(); 

    if(userchoice === compchoice){
        msg.innerText = "Game has been draw";
        msg.style.backgroundColor = "#081b31";
        totalRound++;
        rounds.innerText = totalRound;
    }else{
        let userWin = true;
        if(userchoice == "stone"){
            userWin = compchoice === "paper"? false : true;
        }else if(userchoice == "paper"){
            userWin = compchoice === "scissors"? false : true; 
        }else{
            userWin = compchoice === "stone"? false : true;
        }
        showWinner(userWin,userchoice,compchoice);
    }

    
}

//Displaying winner in the msg box
const showWinner = (userWin,userchoice,compchoice) =>{
    if(userWin){
        console.log("You Won!!!!");
        userscore++;
        userScorePara.innerText = userscore;
        totalRound++;
        rounds.innerText = totalRound;
        msg.innerText = `You Won!! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("You lose");
        compScore++;
        compScorePara.innerText = compScore;
        totalRound++;
        rounds.innerText = totalRound;
        msg.innerText = `You Lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

//Using event Listiner to get user choice on particular click
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
});



