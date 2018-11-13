class Animal{
    
    constructor(name,number){
        this.name=name
        this.number=number
    }

    add(x,y){
        return x+y;
    }
}
class Dog extends Animal{
    constructor(name,number){
        super(name,number);
    }
}

var a=new Dog('doggie',3)
console.log(a.add(1,2))