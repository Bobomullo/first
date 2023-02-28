// // task 1
// function sumFive(arr)
// {
//     let arr1=0
// arr1=arr.filter((a)=>{
//     return a>5
// })
//     return arr1.reduce((a,b)=>{
//         return a+b
//     },0)
// }
// console.log(sumFive([1, 2, 3, -1, 100, 200]));



// task 2

// function rangeOfNum(a,b)
// {
//     let a1=[]
//     for(let i=a+1 ;i<b;i++)
//     {
//         a1.push(i)
             
//     }
// return a1
// }
// console.log(rangeOfNum(-1, 2));




// task 3
// function multiplyNums(a)
// {
//   let b=0
//   b=a.split(",")
//   return b.reduce((a,b)=>{
//     return a*b
//   })
// }
// console.log(multiplyNums("2, 3, 2, 2"))



// task 4
// function largestNumbers(a,arr)
// {
//     let arr1=0
//     arr1=arr.sort((a,b)=>{
//             return a-b
//     })
//     return arr1.slice(arr1.length-a)
// }
// console.log(largestNumbers(4,[100, 0, -1, -999, -99, 9999]));





// task 5
// function  addEnding(arr,a)
// {
// return arr.map((e)=>{
//     return e+a
// })
// }
// console.log(addEnding(['beauti3','kol2','down1'],'lost'));