var obj={a:1,b:2}
var obj2= Object.create(obj);
var obj3= Object.create(obj2);
var obj4= Object.create(obj3);

console.log(obj4.__proto__.__proto__.__proto__) //a:1,b:2
console.log(obj4.__proto__.__proto__.__proto__.__proto__) // Object.prototype
console.log(obj4.__proto__.__proto__.__proto__.__proto__.__proto__) //null
