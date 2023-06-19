// elements
const againButtonEle = document.getElementById('againBtn');
const checkButtonEle = document.getElementById('checkBtn');
const userInputEle = document.getElementById('number-input');
const guessNoEle = document.getElementById('guessNumber');
const resultContentEle = document.getElementById('result-content');
const scoreEle = document.getElementById('score-value');
const highScoreEle = document.getElementById('highscore-value');

//steps to solve it!!!
// 1. get user i/p
// 2. generate random value bet 1 to 100 -->done
// 3. comparing values
    // a. validate user value
    // b. compare the values
// 4. display results

// global variable------->
let score;
let highScore;
let computerValue;

const randomNumber = function(){
  return Math.trunc(Math.random()*100 + 1);
}

function init(){
  score = 10;
  scoreEle.innerText = score;
  computerValue = randomNumber();
  userInputEle.value = "";
  guessNoEle.innerText = "?";
  document.body.style.backgroundColor = '#222';
}

function lost(){
  resultContentEle.innerText = `💥 you lost the game`;
  document.body.style.backgroundColor = `red`;
  userInputEle.value = "";
}


checkButtonEle.addEventListener('click',function(){
  let userInput = Number(userInputEle.value);
  console.log(`score is :`,score);
  if(score > 0){
    if(userInput !== 0){
      console.log("valid");
      if(userInput > 0 && userInput <=100){
        console.log("validated");
        if(userInput === computerValue){
          resultContentEle.innerText = `🎊 Correct number!!`;
          guessNoEle.innerText = computerValue;
          if(Number(highScoreEle.innerText) === 0){
            highScore = score;
            highScoreEle.innerText = highScore;
          }else if(score > highScore){
            highScoreEle.innerText = score;
          }
          document.body.style.backgroundColor = `green`;
          guessNoEle.style.width = '14rem';
        }else if(userInput < computerValue){
          console.log(`value is low`);
          resultContentEle.innerText = `Value is low`;
          score -= 1;
          // scoreEle.innerText = score;
        }else if(userInput > computerValue){
          console.log(`user value is high`);
          resultContentEle.innerText = `Value is high`;
          score -= 1;
          // scoreEle.innerText = score;
        }
      }else{
        // console.log("Enter a no bwt 1 to 100");
        resultContentEle.innerText = `Enter a no bwt 1 to 100`;
      }
    }else{
      resultContentEle.innerText = `Enter a number`;
    }
    console.log(`score is :`,score);
    if(score === 0){
      lost();
    }
  }
  scoreEle.innerText = score;
});

againButtonEle.addEventListener('click',function(){
  init();
});

init();