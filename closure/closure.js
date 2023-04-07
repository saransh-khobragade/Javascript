/*
When you return a function inside a function, then that inner function will act as closure function.
A closure gives you access to an outer function's scope from an inner function. 
Even though outter function has been executed inner function keep holding outter functions variables.
*/
function sum(x) {
    console.log("outter_var",x)
    
    return function (y) {
        return x + y;
    };
}

var innerFun = sum(5); //a is function 

var value = innerFun(10);

console.log(value);  // 15
