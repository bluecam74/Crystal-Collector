

$(document).ready(function () {

var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
wins = 0;
losses = 0;
goalNum = null;
currentNum = 0;


function newGame() {
    $(".targetNumber").empty();
    goalGenerator(); 
    currentNum = 0;
    crystalNumberGenerator();
    $(".currentScore").empty();
    $(".currentScore").append(currentNum);

    
}

function goalGenerator() {
    goalNum = Math.floor(Math.random() * 101) + 19;
    $(".targetNumber").append(goalNum);
}

function crystalNumberGenerator() {
    num1 = Math.floor(Math.random() * 11) + 1;
    console.log("num1: " + num1);
    num2 = Math.floor(Math.random() * 11) + 1;
    console.log("num2: " + num2)
    num3 = Math.floor(Math.random() * 11) + 1;
    console.log("num3: " + num3)
    num4 = Math.floor(Math.random() * 11) + 1;
    console.log("num4: " + num4)
}

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