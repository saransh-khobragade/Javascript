function Person(first, last, age, gender, interests) {
  
  // property and method definitions
  this.first = first;
  this.last = last;
//...
}

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

var person2 = Object.create(person1);


Person.prototype.farewell = function() {
  alert(this.first + ' has left the building. Bye for now!');
};

console.log(person1.valueOf())
console.log(Object.prototype);
console.log(person2.__proto__);
console.log(person2.constructor);

console.log(person1.farewell())