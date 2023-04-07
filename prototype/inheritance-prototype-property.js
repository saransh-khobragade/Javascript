function parent(){
    this.temp="sss"
}
function child(){
   parent.call(this)
}

child.prototype = parent.prototype

const c = new child()

console.log(c.temp)

console.log(c.constructor) //child's constructor has been replaced with parent's contructor

child.prototype.constructor = child

console.log(c.constructor) //now child have child's constructor

