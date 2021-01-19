//packages
const chalk = require('chalk');
var readlineSync = require('readline-sync');

console.log(chalk.blueBright.bgYellow("Welcome to KBC contest!! \n"));

var userName= readlineSync.question(chalk.greenBright("May i know your name? "));

console.log("\nHi "+userName+". Let's get started. \nEnter a/ b/ c for each question to answer");

//variable declaration for score and question-answers
var score=0;

var question1={
  que: "Pongal is a popular festival of which state?\na.Karnataka\nb.Kerela\nc.Tamil Nadu",
  ans: "c"
};

var question2={
  que: "World Health Day is observed on? \na.Apr 07 \nb.Mar 07 \nc.Oct 20 ",
  ans: "a"
};
var question3={
  que: "Bahubali festival is related to? \na.Hinduism \nb.buddhism \nc.Jainism" ,
  ans: "c"
};
var question4={
  que: "which of the following newspapers is ISO years old??\na.The Hindu\nb.The Indian Express \nc.The Times of India",
  ans: "c"
};
var question5={
  que: "lSI stands for?\na.IndianStatisticaI Institute \nb.Indian Standards Institute \nc.Indian Service Institute",
  ans: "b"
};
var question6={
  que: "Field Marshal is the highest rank in?\na.Army \nb.Navy \nc.Air force",
  ans: "a"
};
var question7={
  que: "Delhi became capital of India in?\na.1910 \nb.1911 \nc.1999",
  ans: "b"
};
var question8={
  que: "Boat Race is a popular sport in?\na.Karnataka\nb.Kerela\nc.Tamil Nadu",
  ans: "b"
};
var question9={
  que: "How many spokes are there in our national emblem 'Ashoka Chakra'?\na.12 \nb.24 \nc.23",
  ans: "b"
};
var question10={
  que: "Our National Anthem isr?\na. Jana Gana Manam \nb. Vande Mataramn \nc. Sare Jaha Se Accha",
  ans: "a"
};
//saving all questions in array
var questionSet=[question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

//validating answers
for(let i=0; i<questionSet.length; i++){
checkScore(i+1,questionSet[i].que, questionSet[i].ans);
}
//function to validate answers and update score
function checkScore(queNo, checkQue, checkAns){
  
  var userAns= readlineSync.keyIn(chalk.magenta("\n"+queNo+") "+checkQue+ "\n"),{limit: '$<a-c>'});
  if(userAns===checkAns){
    console.log(chalk.green("Your answer is right"));
    score++;
  }
  else{
    console.log(chalk.redBright("Your answer is wrong"));
    console.log(chalk.blueBright(`Correct answer is ${checkAns}`));
    score--;
  }
  console.log(chalk.yellowBright("Your current score is " +score));
  console.log('---------------------\n');

}

//define Leaderboard
var highScore=[
  {nameH:"Navya", scoreH:"10"},
  {nameH:"Deepika", scoreH:"9"},
  {nameH:"Bindu", scoreH:"8"},
  {nameH:"Sowju", scoreH:"6"}
];



//posting leaderboard
console.log(chalk.keyword('yellow').bold("\n*****Leaderboard-Highest-score*****"));

var scoreBeaten=false;

for(let i=0; i<highScore.length; i++)
{
  console.log(chalk.cyanBright(highScore[i].nameH+" : " +highScore[i].scoreH));

  if(score>=highScore[i].scoreH)
  {
    scoreBeaten=true;
  }
}
console.log('---------------------------------')

//Printin final score
console.log(chalk.bold.red("Hey! This is Your Final Score: "+score));


var posInsert =0;
if(scoreBeaten)
 {
  console.log(chalk.bold.italic.keyword('pink')("*******Congratulations "+userName+", you have beaten the high Score*******"));
  
  console.log(chalk.bold.yellow("\n*****current-Leaderboard*****"));
  
  if(score>=highScore[0].scoreH)
  {
    posInsert=0;
  }
  else if(score>=highScore[1].scoreH)
  {
    posnInsert=1;
  }
  highScore.splice(posInsert,0, {nameH:`${userName}`, scoreH:`${score}`});
  
  for(let i=0; i<highScore.length; i++){
    console.log(chalk.bold.green(highScore[i].nameH+" : " +highScore[i].scoreH));
  }

 }
else
{
  console.log("Sorry "+userName+", you have not beaten the high score :( ")
}

