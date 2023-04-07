class Person {}
class Employee extends Person {}
class Developer extends Employee {}
const tom = new Developer();

Object.getPrototypeOf(tom) === Developer.prototype; // true
Object.getPrototypeOf(tom) === Employee.prototype; // false
Developer.isPrototypeOf(tom); // true
Developer.prototype.isPrototypeOf(tom); // true
Employee.prototype.isPrototypeOf(tom); // true
Person.prototype.isPrototypeOf(tom); // true
Object.prototype.isPrototypeOf(tom); // true

//Developer.prototype means developer's father = employee
//Employee.prototype means employee's father = person

//Object.getPrototypeOf(tom) tom's father = developer