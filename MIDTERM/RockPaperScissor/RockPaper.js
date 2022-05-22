//Element access through DOUMENT OBJECT MODEL(DOM)  
const choices = document.querySelectorAll('.choice1');
const choices2 = document.querySelector('.choices2')
const displayChoices = document.querySelector('.displayChoices')
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.querySelector('#restart');
const modal = document.querySelector('.modal');
const player1Name = document.querySelector('.player1_name')
const player2Name = document.querySelector('.player2_name')
const player1Score = document.querySelector('.player1_score')
const player2Score = document.querySelector('.player2_score')

// Global variables initialization
let totalGamesPlayed = 0; // Number of total games
let totalDraws = 0; // Number of total draws
const selectedValue = player2Name.value;
console.log(selectedValue)


// Computer As A Player
function play(e) {
    var selectedValue = player2Name.value;
    console.log(selectedValue)
    if(selectedValue === 'notSelected') {
        alert('Please choose player2 type')
    }
    else if(player2Name.value === 'Computer') {
        restart.style.display = 'inline-block';
        modal.style.display = 'block';
        const player1Choice = e.target.id;
        const player1Image = e.target.src
        const player2Choice = selectionPlayer2(selectedValue);
        const player2Image = document.getElementById(player2Choice).src
        const winner = getWinner(player1Choice, player2Choice);
        showWinner(winner, player1Image, player2Image);
    }
    // else if(player2Name.options[player2Name.selectedIndex].value === 'Player2') {
        
    // }
}

// get computer's choice
function getComputerChoice(){
    const rand = Math.random(); //for generating ranadom number
    if(rand < 0.34){ // assigning choices based on random number
        return 'rock';
    } else if(rand <= 0.57){
        return 'paper';
    } else {
        return 'scissors';
    }
}


//Get game winner
// Based on choices comparison of players, the function decides the winner
function getWinner(p, c){
    if(p === c) {
        return 'draw';
    } else if(p === 'rock'){    
        if (c === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if(p === 'paper'){
        if(c === 'scissors'){
            return 'computer';
        } else {
            return 'player';
        }
    } else if(p === 'scissors'){
        if(c === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

function showWinner(winner, player1Image, player2Image){
    
    // display the choice of player on UI
    displayChoices.innerHTML = `
        <img class='player1Image' src='${player1Image}'></img>
        <span class='saparateLine'>|</span>
        <img class='player2Image' src='${player2Image}'></img>
        `;

    // Displays total number of games played / draws a
    if (winner === 'player'){
        //Inc player score
        totalGamesPlayed++;
        player1Score.innerHTML++;
        result.innerHTML = `<h1 class="text-win">You Win</h1>
        <p>Total Games: ${totalGamesPlayed}</p>
        <p>Draws: ${totalDraws}</p>
        `;
    } else if(winner === 'computer'){
        //inc computer score
        totalGamesPlayed++;
        player2Score.innerHTML++;
        //show modal result
        result.innerHTML = `<h1 class="text-win">Computer Wins</h1>
        <p>Total Games: ${totalGamesPlayed}</p>
        <p>Draws: ${totalDraws}</p>
        `;
    } else{
        totalGamesPlayed++;
        totalDraws++;
        result.innerHTML = `<h1 class="text-win">It's Draw</h1>
        <p>Total Games: ${totalGamesPlayed}</p>
        <p>Draws: ${totalDraws}</p>
        `;
    }

    //show  changed score
    score.innerHTML = `
    <p class="player1">
        <span class="player1_name">${player1Name.innerHTML}</span>
        : 
        <span class="player1_score">${player1Score.innerHTML}</span>
    </p>
    <p class="player2">
        <span class="player2_name">${player2Name.options[player2Name.selectedIndex].value}</span>
        : 
        <span class="player2_score">${player2Score.innerHTML}</span>
    </p>`;
}

//on-Clicking Play-Again button restartGame function will be triggered
function restartGame(){
    player1Score.innerHTML = 0; // changes player1 score to - 0
    player2Score.innerHTML = 0; // changes player2 score to - 0
    totalGamesPlayed = 0; // changes number of games played to - 0
    totalDraws = 0; // changes number of draws to - 0

    //changing innerHTML of score and player name upon restart as it was in the beginning of the game
    score.innerHTML = 
    `<p class="player1">
        <span class="player1_name">Player1</span>
        :
        <span class="player1_score">0</span>
    </p>
    <p class="player2">
        <select class="player2_name">
            <option value="notSelected">Choose Player2</option>
            <option value="Computer">Computer</option>
            <option value="Player2"">Player2</option>
        </select>
        : 
        <span class="player2_score">0</span>
    </p>`;
    restart.style.display = 'none'; // It will deactivate Play Again button
    modal.style.display = 'none'; 
    displayChoices.style.display = 'none'; // it will deactivate choice displaying section
}

function selectionPlayer2(selectedValue) {
    if(selectedValue === "Computer") {
       return getComputerChoice();
    }
}

//clear modal
function clearModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

//Player Name-change functionality
function changeName() {
    // prompts user a window to enter his/her name and assign it to the player1 name section
    const userName = prompt("enter your name: ");
    if (userName !== '') {
        player1Name.innerHTML = userName;
    }
}


//To display both player choice on UI
function displayPlayerChoice(){
    selectedValue = player2Name.value;
    if(selectedValue === 'Computer'){
        displayChoices.innerHTML = `
        <span class='player1Image'></span>
        <span class='saparateLine'>|</span>
        <span class='player2Image'></span>
        `;
    }
}

//Event Addition to the elements on perticular actions

choices.forEach(choice => choice.addEventListener('click', play)); // On-Clicking choices it will trigger play() function
restart.addEventListener('click', restartGame); // On-Clicking restart button restarGame() function will be executed
player1Name.addEventListener('click', changeName); // click on player1 will prompt a user to change his/her name
player2Name.addEventListener('change', displayPlayerChoice)