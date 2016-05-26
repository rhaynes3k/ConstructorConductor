//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

String.prototype.reverse = function() {
  var strArr = this.split("");
  console.log(strArr);
  var final = [];
  for (var i = strArr.length - 1; i > -1; i--) {
    final.push(strArr[i]);
    console.log(final)
  }
  console.log(final = final.join(""));

  return end;
};//code here
