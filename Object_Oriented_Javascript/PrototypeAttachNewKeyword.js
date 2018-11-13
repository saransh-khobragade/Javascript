function parent(){
    this.a1=10,
    this.b1=20
}

parent.prototype.add=function(x,y){
    return x+y
}
function child(){}

child.prototype=new parent()
var a=new child()

console.log(a.add(3,4))