

$(document).ready(function () {

var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
wins = 0;
losses = 0;
goalNum = null;
currentNum = 0;

// resarts the game without erasing win/loss record
function newGame() {
    $(".targetNumber").empty();
    goalGenerator(); 
    currentNum = 0;
    crystalNumberGenerator();
    $(".currentScore").empty();
    $(".currentScore").append(currentNum);
}

//generates the random number bewteen 19 and 120 that the user tries to match 
function goalGenerator() {
    goalNum = Math.floor(Math.random() * 101) + 19;
    $(".targetNumber").append(goalNum);
}

//generates new values for each crystal
function crystalNumberGenerator() {
    num1 = Math.floor(Math.random() * 11) + 1;
    num2 = Math.floor(Math.random() * 11) + 1;
    num3 = Math.floor(Math.random() * 11) + 1;
    num4 = Math.floor(Math.random() * 11) + 1;
}

// These four click functions are attached to each crystal image
$(".ruby").on("click", function () {
    currentNum+=num1;
    $(".currentScore").empty();
    $(".currentScore").append(currentNum);
    compareNumbers();    
});

$(".diamond").on("click", function () {
    currentNum+=num2;
    $(".currentScore").empty();
    $(".currentScore").append(currentNum);
    compareNumbers();
});

$(".yellowGem").on("click", function () {
    currentNum+=num3;
    $(".currentScore").empty();
    $(".currentScore").append(currentNum);
    compareNumbers();
});

$(".greenGem").on("click", function () {
    currentNum+=num4;
    $(".currentScore").empty();
    $(".currentScore").append(currentNum);
    compareNumbers();
});

//checks if user reached or surpassed the random number, determining wins or lossess. 
function compareNumbers() {
    if (currentNum === goalNum) {
        wins++
        $(".wins").empty();
        $(".wins").append(wins);
        $(".comment").empty();
        $(".comment").append("Great Job...Keep Going!")
        newGame();
    }
    else if (currentNum > goalNum) {
        losses++
        $(".losses").empty();
        $(".losses").append(losses);
        $(".comment").empty();
        $(".comment").append("Sorry, You Went Too High...Try Again!")
        newGame();
    }
}


newGame();







});