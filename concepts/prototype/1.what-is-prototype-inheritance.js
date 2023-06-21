/* 
reference - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

What is prototype
    prototype is a chain/link by which all objects inherit properties and methods from a parent chain.
    Every object in JavaScript has a built-in property, which is called its prototype.
    The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
    When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property.
    If the property still can't be found, then the prototype's prototype is searched untill null reached.
*/

function Person(name) {
    this.name = name
}

a = new Person("max")

Person.prototype.age = 35

console.log(a.age)

//Print complete prototype chain
let object = a;
do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while (object);

/*
{}
[Object: null prototype] {}
null
*/
