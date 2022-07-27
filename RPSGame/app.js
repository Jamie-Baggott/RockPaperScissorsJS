const game = ()=> {

    let  uScore = 0;
    let uWins = 0;

    let cScore = 0;
    let cWins = 0;
    
    
    //Start the game
    const startGame = () =>{
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match")
        const scoreboard = document.querySelector(".scoreboard")
        const wins = document.querySelector(".wins")

        playButton.addEventListener("click", () => {

            var username = document.getElementById('username').value
            var password = document.getElementById('password').value
            
             //Updates the name for the user so it is personalized to their login
             const updateName = () =>{
                const userName = document.querySelector(".user-score h2")
                const userNameWins = document.querySelector(".user-wins h2")
                userName.textContent = username + "'s Score";
                userNameWins.textContent = username + "'s Wins";
             }
             //Looks for the username and if it is found allows the game to begin
            for(var i = 0; i < players.length; i++) {
                if(username == players[i].username && password == players[i].password) {
                    introScreen.classList.add("fadeOut");
                    match.classList.add("fadeIn")
                    scoreboard.classList.add("fadeIn")
                    wins.classList.add("fadeIn")

                    updateName();
                    return;
                }
            }
        });
    }
     

    //Plays the match
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button")
        const userDecision = document.querySelector(".user-decision")
        const cpuDecision = document.querySelector(".cpu-decision")

        //CPU Options
        const cpuOptions = ["rock", "paper", "scissors"];

        //Allows the CPU to choose their option at random
        options.forEach(option=>{
            option.addEventListener("click", function() {
                const cpuNum = Math.floor(Math.random() * 3);
                const cpuChoice = cpuOptions[cpuNum];

                //Compare choices between user and cpu
                compareChoices((this.textContent).toLowerCase(), cpuChoice)
                
                //Update choices visually
                userDecision.src = `./assets/${(this.textContent).toLowerCase()}.png`;
                cpuDecision.src = `./assets/${cpuChoice}.png`; 
                
            })
        });
    };
    //Updates the ongoing score of the game
    const updateScore = () =>{
        const userScore = document.querySelector(".user-score p")
        const cpuScore = document.querySelector(".cpu-score p")
        userScore.textContent = uScore;
        cpuScore.textContent = cScore;
        
    }
    //Updates the ongoing total wins when someone reaches a score of 10
    const updateWins = () =>{
        const userWins = document.querySelector(".user-wins p")
        const cpuWins = document.querySelector(".cpu-wins p")
        userWins.textContent = uWins;
        cpuWins.textContent = cWins;
        
    }
    //Puts the choices of the user and computer against each other
    const compareChoices = (userChoice, cpuChoice) =>{
       
        //Checks for a draw
        const winner = document.querySelector(".winner")

        if (uScore <= 9){
            startGame();
            }else if (uScore >9){
            winner.textContent="You have scored 10, you've beaten the Computer!"
            uScore = 0 ;
            cScore = 0;
            uWins++;
            updateWins();
            updateScore();
            return;
        }

        if (cScore <= 9){
            startGame();
            }else if (cScore >9){
            winner.textContent="The Computer has scored 10, you've lost to the Computer!"
            uScore = 0 ;
            cScore = 0;
            cWins++;
            updateWins();
            updateScore();
            return;
        }

        if (userChoice === cpuChoice){
            winner.textContent = "It is a draw! You and CPU both picked the same";
            return;
        }
        //Checks if user chose rock
        if(userChoice === "rock"){
            if(cpuChoice === "scissors"){
                winner.textContent = "You win! You picked Rock, CPU picked Scissors!"
                uScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "You lose! You picked Rock, CPU picked Paper!";
                cScore++
                updateScore();
                return;
            }
        }
        //Checks if user chose Paper
        if(userChoice === "paper"){
            if(cpuChoice === "scissors"){
                winner.textContent = "You lose! You picked Paper, CPU picked Scissors!"
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "You win! You picked Paper, CPU picked Rock!";
                uScore++;
                updateScore();
                return;
            }
        }
        //Checks if user chose Scissors
        if(userChoice === "scissors"){
            if(cpuChoice === "rock"){
                winner.textContent = "You lose! You picked Scissors, CPU picked Rock!"
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "You win! You picked Scissors, CPU picked Paper!";
                uScore++;
                updateScore();
                return;
            }
        }
    }


    //Call functions
    startGame();
    playMatch();
};

//Starts the Game function
game();