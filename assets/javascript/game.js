$(document).ready(function() {

// Create Variables to track the number of times each gem is clicked.
	var random = "";

// Each crystal should have a random hidden value between 1 - 12.
	var redGem = Math.floor(Math.random() * 12) + 1;
	var blueGem = Math.floor(Math.random() * 12) + 1;
	var yellowGem = Math.floor(Math.random() * 12) + 1;
	var greenGem = Math.floor(Math.random() * 12) + 1;
	
	var totalScore = 0;
	var winCounter = 0;
	var lossCounter = 0;

// Show player a random number at the start of the game
// The random number shown at the start of the game should be between 19 - 120.
	random = Math.floor(Math.random() * 100) + 19;
	$("#random-number").html(random);
	console.log(random);      

// Player clicks on a crystal, it will add a specific amount of points to the player's total score.
	$(".gem-red").on("click", function(){
    	$("#total-score").html(redGem);
		totalCalculator(redGem);
  	});

	$(".gem-blue").on("click", function(){
    	$("#total-score").html(blueGem);
		totalCalculator(blueGem);
  	});

	$(".gem-yellow").on("click", function(){ 
    	$("#total-score").html(yellowGem);
		totalCalculator(yellowGem);
  	});

  	$(".gem-green").on("click", function(){ 
    	$("#total-score").html(greenGem);
		totalCalculator(greenGem);
  	});  	
	
// The game will hide this amount until the player clicks a crystal.
	function totalCalculator(points) {
	// When Player does click one, update the player's score counter.	
		totalScore = points + totalScore;
		$("#total-score").html(totalScore);
		console.log(totalScore);
	
	if (random === totalScore) {
		winCounter++;
		console.log("yay!");
		alert("Congrats, you win!!!");
		$('#win-tally').html(winCounter);
	}else if (random < totalScore){
		lossCounter++;
		console.log("fock");
		alert("You lose!!!");
		$('#loss-tally').html(lossCounter);
		};
	}
	
});


// http://gw.bootcampcontent.com/GW-Coding-Boot-Camp/01-17-Class-Content/blob/master/Class-Content/04-jquery-rpg/2-Homework/Instructions/homework_instructions.md

// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. 
// Also, all the crystals will have four new hidden values. 
// the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. 



	