 let a= [{name: "Saranshk", email: "saransh98@gmail.com"},{name: "Ankita", email: "gupta@gmail.com"}]
let b=[]

let result=a.filter(function(item){
   if(b.indexOf(item.email)===-1 && item.email!="saransh98@gmail.com")
   return item
})
console.log(result)