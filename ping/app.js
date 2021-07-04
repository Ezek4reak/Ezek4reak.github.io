/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, curPlayer, roundScore, dice, dice2, chance, winning_sc, wins;
document.querySelector('.player-0-panel').classList.remove("active");
document.querySelector('.player-1-panel').classList.remove("active");

	const sc = document.querySelector(".Sc_input");
	score=[0,0];
	wins = [0, 0];
	sc.focus();
	setWinningScore();	

document.querySelector('.chance').innerHTML = chance;
//return random number between 1 and 6 inclusive
var roll = () => {
	return Math.floor(Math.random() * 6) + 1;
}

// plays the game
var play = () => {
	document.querySelector('.dice').src = "dice.gif";
	document.querySelector('.dice2').src = "dice.gif";
	setTimeout(spinDice,2000); //waits 2 second for the dice to roll before calling the spineDice function that displays the dice rolled
}

function spinDice(){//this is the main game logic
	dice = roll();
	dice2 = roll();
	chance--;
	document.querySelector('.chance').innerHTML = chance;
	document.querySelector('.dice').src = "dice-" + dice + ".png";
	document.querySelector('.dice2').src = "dice-" + dice2 + ".png";
	if(dice !== 1 && dice2 !== 1){
		if(dice === 6 && dice2 === 6){
			roundScore = 0;
			score[curPlayer] = 0;
			document.getElementById("current-" + curPlayer).textContent = roundScore;
			document.getElementById("score-" + curPlayer).textContent = score[curPlayer];
			next(); 
		}else{
			roundScore += dice + dice2;
			document.getElementById("current-" + curPlayer).textContent = roundScore;
			document.getElementById("score-" + curPlayer).textContent = score[curPlayer];
		}	
	}else{
		roundScore = 0;
		document.getElementById("current-" + curPlayer).textContent = roundScore; 
		next();
	}
	if(chance <= 0){
		hold();
	}
}
//************************************************
//computer play function

function computerPlay(i){
	setTimeout(function(){
		if(i>0 && curPlayer === 1){// check if it's still system turn
			if((chance === 1 && roundScore >= 17) || (roundScore + score[curPlayer])>= winning_sc){ // if system have played twic and the roundscore is greater than 13
				hold();
				return;
			}else{ 
				play();
				i--;
				computerPlay(i);
			}
		}else{
			return;
		}
	}, 3000);
}

//next player
var next = () => {
	curPlayer === 0 ? curPlayer = 1 : curPlayer = 0;

	document.querySelector('.player-0-panel').classList.toggle("active");
	document.querySelector('.player-1-panel').classList.toggle("active");
	chance = 3;
	document.querySelector('.chance').innerHTML = chance;
	if(curPlayer === 1){
		//document.querySelector('.btn-roll').disabled = true;
		document.querySelector('.btn-roll').hidden = true;
		document.querySelector('.btn-hold').hidden = true;
		computerPlay(3);
	}else{
		//document.querySelector('.btn-roll').disabled = false;
		document.querySelector('.btn-roll').hidden = false;
		document.querySelector('.btn-hold').hidden = false;
	}
}
//winner have emearged
var won = (player) => {
	//alert("Player "+ curPlayer +" Won the game!");
	document.getElementById("name-" + curPlayer).innerHTML = "Winner!";
	document.getElementById("name-" + curPlayer).classList.add("winner");
	document.querySelector('.btn-roll').hidden = true;
	document.querySelector('.btn-hold').hidden = true;
	document.querySelector('.btn-new').hidden = false;
		let wn = wins[curPlayer];
		wn +=1;
		wins[curPlayer] = wn;
		document.getElementById("win-" + curPlayer).innerHTML = wins[curPlayer];
		ask();
	return false;
}

// hold
var hold = () => {
	score[curPlayer] += roundScore;
	roundScore = 0;
	document.getElementById("current-" + curPlayer).textContent = roundScore;
	document.getElementById("score-" + curPlayer).textContent = score[curPlayer]; 
	if((score[curPlayer]) >= winning_sc){
		won(curPlayer);
		//setTimeout(ask, 1000);
		return 0;
	}else{
	  next();
    }
}


function init(){
	winning_sc = Number(sc.value);
	score[0]=0, score[1]=0;
	curPlayer = Math.floor(Math.random() * Math.floor(2));
	roundScore = 0;
	chance =3;
	document.getElementById("name-0").textContent = "You";
	document.getElementById("name-1").textContent = "System";
	document.querySelector('.btn-roll').hidden = false;
	document.getElementById("current-0").textContent = 0;
	document.getElementById("current-1").textContent = 0;
	document.getElementById("score-0").textContent = 0;
	document.getElementById("score-1").textContent = 0;
	document.querySelector('.player-0-panel').classList.remove("active");
	document.querySelector('.player-1-panel').classList.remove("active");
	document.querySelector('.player-'+curPlayer+'-panel').classList.add("active");
	document.getElementById("name-0").classList.remove("winner");
	document.getElementById("name-1").classList.remove("winner");
	document.querySelector('.chance').innerHTML = chance;
	document.querySelector('.btn-new').hidden = true;
	sc.disabled = true;
	if(curPlayer === 1){
		computerPlay(3);
		document.querySelector('.btn-roll').hidden = true;
		document.querySelector('.btn-hold').hidden = true;
	}else{
		document.querySelector('.btn-roll').hidden = false;
		document.querySelector('.btn-hold').hidden = false;
	}
}

function setWinningScore(){
	document.querySelector('.btn-roll').hidden = true;
	chance =3;
	sc.addEventListener("change", init);
	 //call initialize function
}

function ask(){
	setTimeout(function(){
		if(confirm("Do You Wanna Set New Winning Score?")){
			sc.disabled = false;
			sc.value = "";
			sc.focus();
		}else{
			return;
		}
	},2000);
}

document.querySelector('.btn-roll').addEventListener('click', play);
document.querySelector('.btn-hold').addEventListener('click', hold);
document.querySelector('.btn-new').addEventListener('click', init);
