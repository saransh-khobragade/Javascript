/*
reference - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

Why use prototype inheritance
    When you have created a function with three properties and you have created a object out of it,
    but later you just want to add a function/property to it without adding anything to old declaration.
    Properties added to prototype does not take memory of object but always available because of prototype chain.
*/

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
const a = new Person("max","payne",12,"black")
  
Person.prototype.nationality = "English";   //we have not added to body of Person

console.log(a.nationality)  //English
//Still we are able to access nationality as a property of instance of Person