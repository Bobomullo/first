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




// task 1
// function drop(arr)
// {
//    return arr.slice(1) 
// }
// console.log(drop([1,2,3,4,5]));


// function sumArr(arr)
// {
//     return arr.reduce((a,b)=>{
//         return a + b
//     })
// }
// console.log(sumArr([1,2,3,4,5]));



// function tooString(arr)
// {
//     return arr.join('')
// }
// console.log(tooString([1,2,3,4,5]));





// function scond(arr)
// {
//     let arr1=arr.sort((a,b)=>{
//         return a-b
//     })
//     return arr1.reverse()[1]
// }
// console.log(scond([10,20,30,40]));


// function index(arr)
// {
//     return arr.indexOf("blue")
// }
// console.log(index(["apple","blue","red"]));




// function addNum(arr)
// { arr1=0
//      arr1=arr.filter((e)=>{
//         return typeof(e)=="number"
//     })
    
//     return arr1.reduce((a,b)=>{
//         return a+b
//     })
// }
// console.log(addNum([1,2,'a','23432']));







// function indexMulti(arr)
// {
//     let arr1=0
//     arr1=arr.map((e,i)=>{
//         return e*i
//     })
//     return arr1.reduce((a,b)=>{
//         return a+b
//     })
//     return arr1
// }
// console.log(indexMulti([1,2,3,4,5]));




// function sevenBoom(arr)
// {
//     let arr1=arr.join('')
//         return arr1.includes('7')?"boom":"no"
    
// }
// console.log(sevenBoom([1,2,3,4,7,5,6,9,0]));



// function name(a) {
    
//     let arr = a.sort((a,b)=>{
//         return a - b 
//     })
//     arr = arr.map((c,i)=>{
//         return c == arr[i+1]?c:"null"
//     }).filter((a)=>{
//         return typeof(a)=="number"
//     })
//     return arr != 0? arr:"Null"

    
// }
// console.log(name([1,2,3,4,5,6,7,8,9,10]));




// function addNum(arr)
// { arr1=0
//      arr1=arr.filter((e)=>{
//         return typeof(e)=="number"
//     })
//     return arr1
// }
// console.log(addNum([1,2,'a','23432']));







// function evenArray(n) {
    //     let arr=[...n]
    //     return arr.filter((a)=>{
    //         return n.indexOf(a)%2==0
    //     })
    // }
    // console.log(evenArray([0,1,2,3,4]));  
    
    // task 12 
    
    // function sortArray(n) {
    //     let arr=[...n]
    //     return arr.sort((a,b)=>{
    //         return a.length - b.length
    //     })
    // }
    // console.log(sortArray(['wofwefw','apple','awe','fweg','ad'])); 
    
    // task 13 
    
    // function compactArr(n) {
    //     let arr=[...n] 
    
    //     return arr.filter((a)=>{
    //         return a!=false
    //     })
    // }
    // console.log(compactArr([0,2,false,'',3]));
    



    // function evenOdd(arr){
    //    let arr1
    //     arr1= arr.reduce((a,b)=>{
    //         return a+b
    //     },0)
    //     return arr1 % 2 ==0 ? "even":"odd"
    // }
    // console.log(evenOdd([1,2]))


//     function numInstr(arr)
//     {
        
//         let arr1=arr.filter((a,b)=>{
//           return a.includes(1) || a.includes(0) ||a.includes(2) || a.includes(3) || a.includes(4) || a.includes(5) || a.includes(6) || a.includes(7) || a.includes(8) || a.includes(9)
//         })
//         return arr1
//         }

// console.log(numInstr(['da4','fwe1fw4e','nioj']));



// function mirror(arr)
// {
//     let arr1=[...arr]
//     arr1=arr1.reverse().slice(1)
//     return  arr.concat(arr1)
// }
// console.log(mirror([1,2,3,4,5]));



// task 4
// function marathonDist(n) {
//      let arr=n.reduce((a,b)=>{
//         return Math.abs(a)+Math.abs(b)
//      })
//     if(arr==25) {
//         return true
//     }
//     else {return false}
// }
// console.log(marathonDist([1,9,5,8,2]));




// task 5
// function removeDups(...arr){
// let arr1=[...arr]
// return arr1.filter((a,b)=>{
//     return arr.indexOf(a)!=b
// })


// }
// console.log(removeDups('eqw','qqwoi','qwe','ewq','eqw','ewq'))







// task 6
// function reverseArr(...arr)
// {
//      let arr1=arr.toString().split('').reverse()
    
    
//      return arr1
// }
// console.log(reverseArr(1134));




// function date (a,b){
    
// return 


// }
// console.log(date(new Date("2003"),new Date("2023")));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// metod New date
// let timeNow = new Date()
// console.log(timeNow);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// metod New date  nachalo
// let time1 =new Date(0)
// console.log(time1);

//////////////////////////////////////////////////////
// metod New date sring
// let date = new Date("2023-02-16")
// console.log(date);
/////////////////////////////////////////////////
// metod New date parametr
// let time1 =new Date(2020,1,20,4,12,11,0)
// console.log(time1);

////////////////////////////////////////////////////////////////////////////////////////
// metod Now ()
// let n=Date.now()
// console.log(n);
///////////////////////////////////////////////////////////////////////////////////////////////

// metod getFullYear
// const time= new Date()
// let year = time.getFullYear()
// console.log(year);

//////////////////////////////////////////////////////////////
// metod getMonth()
// let d = new Date()
// let month=d.getMonth()
// console.log(month);

///////////////////////////////////////////////////////////////////////////////////////

// metod get date()
// let d=new Date()
// let day=d.getDate()
// console.log(day);
//////////////////////////////////////////////////////////////////////////////////////
// metod getDay
// let day=new Date()
// console.log(day.getDay());
//////////////////////////////////////////////////////////////////////////////////

// metod get hours
// let day=new Date()
// console.log(day.getHours());
/////////////////////////////////////////////////////////////////////
// metod getMinutes
// let day=new Date()
// console.log(day.getMinutes());
/////////////////////////////////////////////////////////////////////////
// metod set day
// let d=new Date()
// d.setDate(15)
// console.log(d);
/////////////////////////////////////////////////////////////////////////////////
