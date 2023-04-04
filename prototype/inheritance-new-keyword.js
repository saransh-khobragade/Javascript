function parent(){
    this.temp="sss"
}
function child(){}

child.prototype = new parent()

const c = new child()

console.log(c.temp)