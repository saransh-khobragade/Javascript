// Setting up prototype
// Using Object.create
const personPrototype = {
    greet() {
        console.log("hello!");
    },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!



// Setting up prototype
// Using a constructor
const personPrototype2 = {
    greet() {
        console.log(`hello, my name is ${this.name}!`);
    },
};

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, personPrototype2);
const a = new Person("max")
a.greet()