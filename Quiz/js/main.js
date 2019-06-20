(function(){
'use strict';

var question = document.getElementById('question');
var btn = document.getElementById('btn');
var result = document.getElementById('result');
var answers = document.querySelectorAll('#answers > li');
var scoreLabel = document.querySelector('#result > p');
var shuffledAnswers;
var quizSet = [
  {q: '名越くんは？',a:['筋肉モリモリ','ガリガリ','中肉中背']},
  {q: '名越くんが好きなのは？',a:['喧嘩','ゲーム','漫画']},
  {q: '名越くんはまじで?',a:['すごすぎてもはやすごくない','すごくない','すごい']},

];

var currentNum = 0;
var isAnswered;
var score = 0;

function shuffle(arr){
 var i;
 var j;
 var tmp;
 for(i = arr.length - 1; i >= 0; i--){
   j = Math.floor(Math.random()*(i+1));
   tmp = arr[i];
   arr[i] = arr[j];
   arr[j] = tmp;
 }
 return arr;

}
function setQuiz(){

  var i;
  question.textContent = quizSet[currentNum].q;
  shuffledAnswers = shuffle(quizSet[currentNum].a.slice());
  // answers[0].textContent = shuffledAnswers[0];
  // answers[1].textContent = shuffledAnswers[1];
  // answers[2].textContent = shuffledAnswers[2];
  isAnswered = false;
  for (i =0; i < answers.length; i++){
    answers[i].classList.remove('correct');
    answers[i].classList.remove('wrong');
    answers[i].textContent = shuffledAnswers[i];

  }
  btn.classList.add('disabled');
  if(currentNum === quizSet.length - 1){
    btn.textContent = 'showscore';
  }

}

function setEvents() {
  var i;
  for (i = 0; i < answers.length; i++) {
    answers[i].addEventListener('click', function() {
      checkAnswer(this);
    });
  }
  btn.addEventListener('click', function() {
    if (this.classList.contains('disabled')) {
      return;
    }
    // setQuiz();
    if (currentNum === quizSet.length) {
      // show score
      console.log('Score: ' + score + ' / ' + quizSet.length);
      scoreLabel.textContent = 'Score: ' + score + ' / ' + quizSet.length
      result.classList.add('show');
    } else {
      setQuiz();
    }
  });
}

function checkAnswer(node){
  if(isAnswered){
    return;
  }
  isAnswered = true;
  if(node.textContent === quizSet[currentNum].a[0]){
    console.log('correct')
    node.textContent += '...Correct!'
    node.classList.add('correct');
    score++;
  } else {
    console.log('wrong')
      node.textContent += '...Wrong!'
    node.classList.add('wrong');
  }
btn.classList.remove('disabled');
currentNum++;

}

setQuiz();

setEvents();

})();
