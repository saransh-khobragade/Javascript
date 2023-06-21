for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000)
}
/*
5
5
5
5
5 
There will be 5 block of loop,
loop will run 5 times and 5 blocks of code will go to queue for execution because setTimeout is async
now in queue they will start executing
var variable gets leaked to last scope while running loop so its value will be 5 when first block starts running
*/

for(let i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000)
}
/*
0
1
2
3
4
here every block will have its own values of i independent so i will be printed as expected
*/