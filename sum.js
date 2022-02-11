// function sum(arr, i, sum) {
//   if (i === arr.length) {
//     return sum;
//   }

//   for (var j = i; j < arr.length; j++) {
//     sum += arr[j];
//   }
// }

// var sum = function(array, i) {
//     if(array.length === 0){
//         return 0;
//     }
//  // console.log(array[i]);
//   if(i === array.length-1){
//     return array[i];
//   }
//   return array[i] + sum(array, i+1);
// };
// console.log(sum([1, 2, 3, 4, 5, 6],0)) //21


// let str='shikha'
// let str2= str.splice(0)
// console.log(str2,str);

[1,2,3].forEach(i=> setTimeout(()=>{console.log(i)},1000))
// [1,2,3].forEach((e)=>{
//   console.log(e);
// })

for(var i=1;i<=3;i++)setTimeout(()=>console.log(i),1000)