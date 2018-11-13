var a={
    a:3,
    b:5,
    add:function(x,y){
        return x+y;
    }
}
var b={}

Object.setPrototypeOf(b,a)
//b.__proto__=a
//console.log(b.__proto__)
console.log(b.add(3,4))