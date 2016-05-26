//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors.

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

var QuizUser = function() {
this.name = name;
this.email = email;
this.password = password;
this.totalScore = totalScore;
};//code here


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

var Question = function() {
this.title = title;
this.answersArray = answersArray;
this.rightAnswer = rightAnswer;
this.difficulty = difficulty;
};//code here


//Create a quizUsers Array which is going to hold all of our users.

  var quizUers = [];//code here


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

var me = new QuizUser("Rommel", "rhaynes3k@gmail.com", "thunder", 85);
var myself = new QuizUser("Romulus", "rhaynes3k@yahoo.com", "lightning", 78);
var i = new QuizUser("Desert-fox", "dez.fox@aol.com", "locomo", 57);

quizUsers.push(me, myself, i);//code here


//Create a questions Array which is going to hold all of our questions

  var questions = [];//code here


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

var q1 = new Question("T/F: Inheritance is achieved in JavaScript through Prototypes?", ["T", "F"], "T", 2/5);
var q2 = new Question("T/F: JavaScript is just a scripting version of Java", ["T", "F"], "F", 4/5);
var q3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", ["T", "F"], "T", 2/5);//code here


//Now push all of your instances of Question into the questions Array

  questions.push(q1, q2, q3);//code here

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  console.log(quizUsers, questions);//code here
