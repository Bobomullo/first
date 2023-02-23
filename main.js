// $1 task 1
// function add(a,b)
// {
//     return a+b
// }
// console.log(add(5,7))

// task 2 
// function max(a,b,c)
// {
//     if (a>=b && a>=c )
//     {
//         return a
//     }
//    else if (b>a && b>=c)
//     {
//         return b
//     }
//    else if(c>a && c>b)
//    {
//     return c
//    } 
// }
// console.log(max(3 ,6 ,3));

// task 3
// function nextEven(a)
// {
// return a-(a%2)+2
// }
// console.log(nextEven(4))


// task 4
// function addAll(a,b){
//     let sum=0
//     for (let i=a; i<=b;i++)
//     {
//         sum+=i
//     }
//     return sum
// }
// console.log(addAll(2,4));


// task 5

// function add3(a)
// {
//    let sum=0
//     for(let i=a;i > 0; i=i)
//     {
//         sum+=(i %  10)
//         i = Math.floor(i / 10)
//     }
//      return sum  
// }
// console.log(add3(211));


// task 6
// function evennums(a,b)
// {
//     let c=""

//     for(let i=a ; i<=b;i++)
//     {
//         if (i%2==0){
//              c+=i+"   "}
       
//     }
// return c
// }
// console.log(evennums(2,7));


// task 7



// task 8
// function hypotenuse(a,b)

// {
//     return c=Math.sqrt(a*a+b*b)
// }
// console.log(hypotenuse(3 ,6));



// // task 9
// function factorial(a)
// {
//     let sum=1
//     for(let i=1;i<=a;i++)
//     {
//         sum*=i
//     }
//     return sum
// }
// console.log(factorial(5));


// task 10 
// function palindrom(a)



// task 11
// function cnt(a,b)
// {let x=0

// for (let i=a;i > 0;i = i)
// {
//     if (i%10==b ){
//     x++
// }
// i = Math.floor(i/10)
    
// }
// return x
// }
// console.log(cnt(121212,2))

///////////////////////////////////////////////////////////////////////////////////////

// task 1
// function days(a)
// {let b=2023
// let c=0

// c=b-a
// a=c*365
//  console.log(a +" " +b);
// }
// console.log(days(2003))


// task 2
// function  parametrs(a,b,c)
// {
// let sum=0
// let pozi=0
// let nega=0
// let zoro=0

// sum=a+b+c;

// if (a<0) nega++
// if (a==0) zoro++ 
// if (a>0) pozi++ 

// if (b<0) nega++ 
// if (b==0)zoro++  
// if (b>0)pozi++  

// if (c<0)  nega++ 
// if (c==0) zoro++  
// if (c>0) pozi++  



//     return (`positive : ${pozi} nagative: ${nega}  zero:${zoro} sum:${sum}`)
// }

// console.log(parametrs(10,0,-12))


// task 3
// function reverceNum(n) {
//     let sum=" "
//     let rev=0
//     for(let i=n; i>0;) {
        
//         rev=sum+=i%10
//         i=Math.floor(i/=10)
//     } 
//     return rev
    
// }
//   console.log(reverceNum(453));




// 02020202020202020202020202020202020202020202020202020202020022020202020202202020202202002
// task 1
// function stringToArray(a)
// {
//     let b=a.split(" ")

// return b
// }
// console.log(stringToArray("hello world . apple "))



// task 2
// function stringToArray(a)
// {
//     let b=a.split()
//     b=a[0].toUpperCase()+a.substring(1)
//     return b
// }
// console.log(stringToArray("hello world"));



// task 3
// function DetectUpperCase(a)
// {
//     let Uppercase="";
//     let LowerCase="";
//     for(let i=0;i<a.length;i++)
//     {
//         if(a.charAt(i)==a.charAt(i).toUpperCase()){
//             Uppercase+=a[i]
//         }
//         else LowerCase+=a[i]
//     }
//     return Uppercase+LowerCase
// }
// console.log(DetectUpperCase("LoLoLoLoLoLo"))


// task 4
// function countVowels(a)
// {
//     let cnt=0
//     for(let i=0;i<a.length;i++)
//     {
//         if (a.charAt(i)=="a" || a.charAt(i)=="o" || a.charAt(i)=="e" || a.charAt(i)=="u" )
//         cnt++
//     }
// return cnt
// }
// console.log(countVowels("pokoloeko"))


// task 5
// function reverse(a)
// {
//     return (a.toString().split("").reverse().join("")+a)
// }
// console.log(reverse(123))


// // task 6
// function charCount(a)
// {
//     let cnt=0
//     for (let i=0;i<a.length;i++)
//     {
//         if (a.charAt(i)=="b")
//        cnt++
        
//     }
//     return cnt 
// }
// console.log(charCount("bob baby body"))




// home task 
// // task 1 
// function takeVowels(str) {
//     let vowel = '';
//     for(let i = 0;i < str.length;i++){
//      if( str[i] != "a" && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u' && str[i] != "A" && str[i] != 'E' && str[i] != 'I' && str[i] != 'O' && str[i] != 'U'){
//             vowel +=str[i]
//         }
//     }
//     return vowel
// }
// console.log(takeVowels('I have never seen a thin person drinking Diet Coke.'));

// function pow(a) {
//     let a = ''
//     let b = 0
//     num = num.toString()
//     for(let i = 0;i < a.length;i++){
//         b = a[i]*a[i]
//          a += b

//     }
//     return +(a)
// }
// console.log(pow());


// task 2
// function potato(str) {
//     let potato = 'potato'
//     let cnt = 0
//     str = str.replace('potato'," potato ")
//     str = str.split(" ")
//     for(let i = 0;i < str.length;i++){
//         if ( str[i] == potato){
//             cnt ++
//         }
//     }
//     return cnt
// }
// console.log(potato('potatopotato'));


// task 3
// function uppLetter(params) {
//     params = params.split(" ")
//     let cnt = 0
//     for(let i = 0;i < params.length;i++)
//     {
        
//         if(params[i].charAt(0) == params[i].charAt(0).toUpperCase()){
//             cnt++
//         }
        
//     }
//     if (cnt == params.length){
//         return 'True'
//     }
//     else {return 'False'}
        
    
// }
// console.log(uppLetter('warer is transparent'));

// task 4
// function upp(str) {
//     let b = ''
//     for(let i = 0;i < str.length;i++){
//         if(str[i] == str[i].toLowerCase()){
//             b += str[i].toUpperCase()
//         }
//         else {
//             b+= str[i].toLowerCase()
//         }
//     }
//     return b
// }
// console.log(upp('Happy Birthday'));


// task 5
// function vowelIndex(vow) {
//     for(let i = 0;i < vow.length;i++){
//         if(vow[i] == 'a'  vow[i] == 'e'  vow[i] == 'o' || vow[i] == 'u' ||vow[i] == 'i' ){
//             return i
//         }

//     }
// }
// console.log(vowelIndex('strawberry'))


// function minMax(a)
// {
    
// }


/////////////////////////////////////////////////////



// function firstfunc(arr) {
    
//   return  arr[0]
  
// }
// console.log(firstfunc([0,2,3,4,5]))


    
    
// function reverser(arr)
// {
//  return arr.reverse()
// }
// console.log(reverser([1,2,3,5,4]))



// let arr=[1,2,3,4,5]
// console.log(arr.reverse());





// function add1(arr)
// {
//     let arr1=arr.map((e)=>{

//         return e + 1
//     })
//     return arr1
// }
// console.log(add1([-1,0,1,2,3,4]));



// function concat(arr1,arr2)
// {
// return arr1.concat(arr2)
// }
// console.log(concat([1,3,5],[2,4,6]));





function totalVolume(...arr)
{
    
}








