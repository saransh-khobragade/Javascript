function abc(x,y){
    this.x=x,
    this.y=y
}

var a=new abc(1,2)

abc.prototype.z=3

console.log(a.z)