function parent(){
    this.temp="sss"
}
function child(){
   parent.call(this)
}

child.prototype = parent.prototype
child.prototype.constructor = child

const c = new child()

console.log(c.temp)