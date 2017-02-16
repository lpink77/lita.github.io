<!-- Paste this code into an external JavaScript file named: quiz_config.js  -->

/* This script and many more are available free online at
The JavaScript Source :: http://www.javascriptsource.com
Created by: James Crooke :: http://www.cj-design.com */

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();

// To add more questions, just follow the format below.

questions[0] = "1) A 4,800N cube with a 2 m side is put on the ground, its pressure is...";
choices[0] = new Array();
choices[0][0] = " 300 Pa";
choices[0][1] = " 600 Pa";
choices[0][2] = " 1,200 Pa";
choices[0][3] = " 2,400 Pa";
answers[0] = choices[0][2];

questions[1] = "2) An object has been weighted in the air, and its weight is 15.75 N, while its weight in oil is 9.55 N. The buoyancy force experienced by the object is ...";
choices[1] = new Array();
choices[1][0] = " 1.65 N";
choices[1][1] = " 6.20 N";
choices[1][2] = " 25.3 N";
choices[1][3] = " 150.4 N";
answers[1] = choices[1][1];

questions[2] = "3) Hydrometer is a measuring instrument used to measure ...";
choices[2] = new Array();
choices[2][0] = " weight";
choices[2][1] = " mass";
choices[2][2] = " density";
choices[2][3] = " pressure";
answers[2] = choices[2][2];

questions[3] = "4) The altitude of a certain location with 57 cmHg pressure is ....";
choices[3] = new Array();
choices[3][0] = " 190 m";
choices[3][1] = " 900 m";
choices[3][2] = " 1,900 m";
choices[3][3] = " 5,700 m";
answers[3] = choices[3][2];

questions[4] = "5) 1 atmosphere is equivalent to 7,600 mmHg";
choices[4] = new Array();
choices[4][0] = "True";
choices[4][1] = "False";
answers[4] = choices[4][1];

// response for getting 100%
response[0] = "Excellent, top marks!";
// response for getting 90% or more
response[1] = "Excellent, try again to get 100%!"
// response for getting 70% or more
response[2] = "Well done, that is a good score, can you do better?";
// response for getting over 50%
response[3] = "Nice one, you got more than half of the questions right, can you do better?";
// response for getting 40% or more
response[4] = "You got some questions right, you can do better!";
// response for getting 20% or more
response[5] = "You didn't do too well, why not try again!?";
// response for getting 10% or more
response[6] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[7] = "Oh dear, I think you need to go back to school (or try again)!";




