function parent(){
    this.a1=10,
    this.b1=20
}

parent.prototype.add=function(x,y){
    return x+y
}


var a=new parent();

function child(m,n){
    parent.call(this)
    this.c1=m
    this.d1=n
}



//Object.assign(child.prototype,parent.prototype)
child.prototype=Object.create(parent.prototype)
child.prototype.constructor=child

var b=new child(8,9)
console.log(b.a1)
console.log(b.add(4,5))