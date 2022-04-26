const choices = document.querySelectorAll('.choice1');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.querySelector('#restart');
const modal = document.querySelector('.modal');
const player1Name = document.querySelector('.player1_name')
const player2Name = document.querySelector('.player2_name')
const player1Score = document.querySelector('.player1_score')
const player2Score = document.querySelector('.player2_score')

// const scoreboard = {
//     player: 0,
//     computer: 0
// }

// Computer As A Player
function play(e) {
    if(player2Name.options[player2Name.selectedIndex].value === 'notSelected') {
        alert('Please choose player2 type')
    }
    else if(player2Name.options[player2Name.selectedIndex].value === 'Computer') {
        restart.style.display = 'inline-block';
        const player1Choice = e.target.id;
        const player2Choice = selectionPlayer2();
        const winner = getWinner(player1Choice, player2Choice);
        showWinner(winner, player2Choice);
    }
    else if(player2Name.options[player2Name.selectedIndex].value === 'Player2') {
        
    }
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

function showWinner(winner, player2Choice){
    if (winner === 'player'){
        //Inc player score
        player1Score.innerHTML++;
        result.innerHTML = `<h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${player2Choice} fa-10x"></i>
        <p>Computer chose <strong>${player2Choice.charAt(0).toUpperCase()+ player2Choice.slice(1)}</strong></p>
        `;
    } else if(winner === 'computer'){
        //inc computer score
        player2Score.innerHTML++;
        //show modal result
        result.innerHTML = `<h1 class="text-lose">You lose</h1>
        <i class="fas fa-hand-${player2Choice} fa-10x"></i>
        <p>Computer chose <strong>${player2Choice.charAt(0).toUpperCase()+ player2Choice.slice(1)}</strong></p>
        `;
    } else{
        result.innerHTML = `<h1>It's A Draw</h1>
        <i class="fas fa-hand-${player2Choice} fa-10x"></i>
        <p>Computer chose <strong>${player2Choice.charAt(0).toUpperCase()+ player2Choice.slice(1)}</strong></p>
        `;
    }
    //show score
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

    modal.style.display = 'block';
}

//Restart Game
function restartGame(){
    player1Score.innerHTML = 0;
    player2Score.innerHTML = 0;
    player1Name.innerHTML  = 'Player1';
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
            // <option value="Player2"">Player2</option>
        </select>
        : 
        <span class="player2_score">0</span>
    </p>`;
    restart.style.display = 'none';
}

function selectionPlayer2() {
    var selectedValue = player2Name.options[player2Name.selectedIndex].value;

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

function changeName() {
    const userName = prompt("enter your name: ");
    if (userName !== '') {
        player1Name.innerHTML = userName;
    }
}

//Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
player1Name.addEventListener('click', changeName);