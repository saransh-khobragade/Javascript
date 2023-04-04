class parent{
    constructor(){
        this.a = "hjshs"
    }
}
class child extends parent{
    constructor(){
        super()
    }
}
const c = new child()
console.log(c.a)