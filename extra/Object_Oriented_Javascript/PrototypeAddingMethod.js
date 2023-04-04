function abc(x,y){
    this.x=x,
    this.y=y
}

var a=new abc(1,2)

abc.prototype.add=function(x,y){
    return x+y
}

console.log(a.add(1,3))