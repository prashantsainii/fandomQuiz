var readlineSync = require('readline-sync');

var score = 0;
var playerName = readlineSync.question("Hey!! What's your name ?\n");

var questions = [{
    question : "Which team became Clash of Clans World Champion in 2022 ?\n  a : MS Esports\n  b : Tribe Gaming\n  c : Queen Walkers Stephanie\n  d : Clash Champs\n\n",
    answer: "c"
  }, {
    question: "Who is best Clash of Clans player in the world ?\n  a : Stars\n  b : Klaus\n  c : Synthe\n  d : Patolino\n\n",
    answer: "b"
  }, {
    question: "Who is the best PUBG Mobile player in the world ?\n  a : Paraboy\n  b : Action\n  c : Jimmy\n  d : Order\n\n",
    answer: "a"
  }, {
    question: "Which org has most dominating CODM lineup in India ?\n  a : GodLike\n  b : BLIND\n  c : SOUL\n  d : GodsReign\n\n",
    answer: "a"
  }, {
    question: "Which org won content of the year award in 2022 ?\n  a : Orange Rock\n  b : Orangutan\n  c : GodLike Esports\n  d : Soul\n\n",
    answer: "d"
  }, {
    question: "Which player is known for his Blizzard Lalo attacks ?\n  a : Leo\n  b : Klaus\n  c : Stars\n  d : Loopzera\n\n",
    answer: "c"
  }, {
    question: "Who is the best BGMI player in India ?\n  a : Jonathan\n  b : Goblin\n  c : Neyoo\n  d : AkOP\n\n",
    answer: "a"
  }, {
    question: "Highest Top fragger rank JONATHAN holds at global stage in PMWL\n  a : #1\n  b : #2\n  c : #4\n  d : #5\n\n",
    answer: "b"
  }, {
    question: "Which player from Queen Walkers left the lineup after world championship ?\n  a : GAKU\n  b : Kazuma\n  c : Bernaul\n  d : yuta14\n\n",
    answer: "d"
  }, {
    question: "Highest finishes record Jonathan has in PMIS ?\n  a : 10\n  b : 12\n  c : 14\n  d : 16\n\n",
    answer: "d"
  }];
var highScore = [{
  playerName : "Player 1",
  playerScore : "2"
  },{
  playerName : "Player 2",
  playerScore : "3"
  }
];

function showLeaderBoard(){
  console.log("\nCheckout Leaderboard -->")
  for(var i=highScore.length - 1; i>=0; i--){
    console.log(highScore[i].playerName + " : " + highScore[i].playerScore);
  }
}

function showScore(){
  console.log("Your final score is : " + score);
  if(score > highScore[highScore.length - 1].playerScore){
    console.log("Congratulations. You beat the High Score");
    highScore.push({playerName: playerName, playerScore : score})
  }
  showLeaderBoard();
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log("Correct Answer :)");
  }
  else{
    console.log("Wrong Answer :(");
  } 
}

function game(){
  console.log("\nLet's Begin !!\n");
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
    if(i != questions.length - 1) console.log("Score : " + score + "\n-----------------\n");
    else console.log();
  }
  showScore();
  var again = readlineSync.question("\nPress A to play again\n");
  if(again.toUpperCase() == "A"){
    score = 0;
    game();
  }
  else console.log("\nThanks for joining");
}

function welcome(){
  return playOrNot = readlineSync.question("Welcome " + playerName + ". How well do you know eSports ? Let's find out.\nPress P to play\n");
}

var userWish = welcome();
if(userWish.toUpperCase() === "P") game();
else console.log("Thanks for passing by. Have a good day :)");