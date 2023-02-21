//  function sendPassword("rightly" )
//  {
//    return function  Password(str){
//     if ( sendPassword("rightly" )== password(srt))   
//      {
//         return "true"
//     }
// else {
//     return "false"
// }

//    }
//  }
//  console.log(Password("wda"))


// function oddishOrEven(a)
// let sum=0
// {
    
// }


// num5 correkt
// function divisibleByFive(a)
// {
//     if(a%5==0) {
//         return "true"
        
//     }
//     else{
//         return "false"
//     }

// }
// console.log(divisibleByFive(4))


// function gcd(a,b)
// {
//     if (a==0 && b==0)
//     {
//         return 1
//     }
//     return a  gcd(a,a-1)
// }
// console.log(8,32)


// function oddOrEven(a)
// let sum=0
// {
//     for (let i=1;i<=a;i++)
//     {
//         sum+=(a%10)
//     }
//     if (sum%2==0){
//         return "Even"
//     }
//     else {
//         return "odd"
//     }
// }
// console.log(oddOrEven(4433))




// ------------------------------------------------------------------------------------------------------------------------------------





// home task1

// function combinations(items) {
//   let res = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     res *= arguments[i];
//   }
//   return res;
// }
// console.log(combinations(2, 3, 4, 5));



// function FindSeven(a)
// {
//     if (a%10==7)
//     {
//         return "boom"
//     }
//     else if(a<=0) {
//         return "relax"
//     }
//     return FindSeven(Math.floor(a/10))
// }
// console.log (FindSeven(1173))




// function adds10(a) {
//   return function () {
//     return a + 10;
//   };
// }
// const adds = adds10(44);
// console.log(adds());




// function add(a)
// {
//     if(a==0)
//     {
//         return 0
//     }
//     console.log(a)
//     return add(a-1)
// }
// add(10)


// ----------------------------------------------------------------------------------------------------

// task 1
// function comp(a,b)
// {
//  if (a.length==b.length)
//  {
//     return true 
//  }
//  else {
//  return false}
// }
// console.log(comp("asd","da"))


function findNemo(str){
let str2=str.split(" ").indexOf("Nemo")
    return str?`i fund Nemo`
}
console.log(findNemo("i am finding Nemo !"))