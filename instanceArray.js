/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  var users = [];//code here


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  var tyler = new User(Tyler, tylermcginnis33@gmail.com, 'iLoveJS');
  var cahlan = new User(Cahlan, cahlan@devmounta.in, 'iLoveHashtags');//code here
  var lenny = new User(Lenny, lenny@theLenster.com, 'iLoveLentilSoup');
users.push(tyler, cahlan, lenny);
console.log('Tyler\'s information is ');
//Console.log all of Tylers information

  console.log("Tyler's information is " + users[0].name + ", " + users[0].email + ", " + users[0].pw);//code here

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  console.log("Lenny's information is " + users[2].name + ", " + users[2].email + ", " + users[2].pw);//code here


//Now create another instance of User using your own information and then add that to your users array.

var rommie = new User("Rommie", "rhaynes3k@gmail.com", "mygosh");
users.push(rommie);//code here

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  console.log("All my users names are " + users[0].name + ", " + users[1].name + ", " + users[2].name + ", " + users[3].name);//code here
