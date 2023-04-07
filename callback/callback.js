function first(callback,callback2){
    setTimeout(()=>{
        console.log('first called')
        callback(callback2)
    },3000)
}

function second(callback2){
    setTimeout(()=>{
        console.log('second called')
        callback2()
    },2000)
}

function third(){
    setTimeout(()=>{
        console.log('third called')
    },1000)
}

//second(third) //simple callback
//first(second,third) //callbackchain
first(function(){console.log('second called')}) //anoymonous callback