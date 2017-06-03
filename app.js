'use strict';
// Use promt for input and alert for output to the user.
//Greeting and define users name.
var user = prompt('What is your name?');
alert ('Hello ' + user + ' try to guess a few yes or no questions about me.');

var correct = 0;
console.log('Value of correct is ' + correct);



//Question 1
var cooking = prompt('Can I cook well?');
if(cooking.toUpperCase() === 'YES') {
  alert('I am great at cooking and Italian food is my specialty.');
  correct++;
} else {
  alert('Wrong. I can cook almost anything.');
}

//Question 2
var computer = prompt('Am I great at setting up my own laptop');
if(computer.toUpperCase() === 'NO') {
  alert('Correct. In fact I needed help from nearly half the class.');
  correct++;
}else {
  alert('HAHAHAHA. Yeah I wish...');
}

//Question 3
var Trek = prompt('Is Star Wars better than Star Trek?');
if(Trek.toUpperCase() === 'YES') {
  alert('You are incorrect. Star Trek is better. Resistance is Futile.');
  correct++;
}else {
  alert('Correct! Star Trek is better and no one kisses their sister.');
}

//Question 4
var travel = prompt('Have I been to every continent?');
if(travel.toUpperCase() === 'NO') {
  alert('Correct. I have never been to Antartica');
  correct++;
}else{
  alert ('Wrong. Never been to Antartica, and Australia was my favorite.');
}

//Question 5
var sing = prompt('Am I good at singing?');
if(sing.toUpperCase() === 'YES') {
  alert ('I have been called the song bird of my generation by those who have heard me.....THAT good.');
}else{
  alert ('Correct. Tried to do Karaoke once and I was so bad they actually turned the mic off in the middle of the song.');
  correct++;
}

//Question 6 must take a number input with four guesses.(indicate "too high" or "too low")
var states = prompt('How many states have I been to?');
for (var i = 0; i < 4; i++) {

  if(parseInt(states > 27)) {
    alert ('Too high.');
    states = prompt('Guess again.');
    }else if (states < 27) {
      alert ('Too low.');
      states = prompt('Guess again.');
      }else if (states == 27){
        alert ('Correct!');
        correct++;
        i = 4;
    }
}

//Question 7 must have multiple correct answers.
var states = prompt('new question');
for (var i = 0; i < 4; i++)

//Keep track on the number of correct answers at bottom of page.
