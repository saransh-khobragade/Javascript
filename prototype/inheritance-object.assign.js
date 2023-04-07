const personPrototype2 = {
    greet() {
        console.log(`hello, my name is ${this.name}!`);
    },
};

function Person(name) {
    this.name = name;
}

//object.assign copy right object properties to left object properties
Object.assign(Person.prototype, personPrototype2);
const a = new Person("max")
a.greet()