//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  var Person function(name, age) {
    this.name = name;
    this.age = age;
  };//code here


//Now create three instances of Person with data you make up

  var mom = new Person("Angela", 62);
  var dad = new Person("William", 64);
  var granny = new Person("Delores", 86);//code here


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

this.sayName = function(obj) {
console.log(obj.name)
};//code here
