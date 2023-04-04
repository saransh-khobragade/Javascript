function parent(){
    this.a = "hhl"
}
const p = new parent()
const child = Object.create(p)
console.log(child.a)
