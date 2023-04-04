
function MaxInArray(arr){
   var a=Array.prototype.slice.call(arr);
   return Math.max.apply(null,a);
}
console.log(MaxInArray([3,4,5,5,2,5,11]));