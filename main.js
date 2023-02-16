
// function sum(a, b){
// let result=a+b

// return result

// }
// console.log(sum(1,3))


// function max(a, b,c){
// if(a>b && a>c)
// return a
// else if (b>a && b>c)
// return b
// else if (c>a && c>b)
// return c
// }
// console.log(max(1,3,6))

// Math.sqrt
// function nexteven(n)
// {
   
//     return  n-(n%2)+2
// }
// console.log(nexteven(87))


// function sum(a,b)
// {
//     let sum=0
//     for (let i=a ; i<=b ;i++)
//     sum+=i
//     return  sum
// }
// console.log(sum(1,3))


// function sum(a,b,c)
// {
    
//     return  a+b+c
// }
// console.log(sum(1,3,2))



// let evenr=" "
// function even(a,b)

// {
//   for( let i=a;i<=b;i++)
//   if(i%2==0)
//   {
//   evenr += i +" "
// }
// return evenr
// }
// console.log(even(1,10))

// function Kvadrat(a,b){
//     let c
//     for(i=1; i<=b; i++)
//     {
//         c=i*i
//         if(c>=a && c<=b)
//         {
//             console.log(c)
//         }
//     }
// }
// console.log(Kvadrat(1,16))


// let c
// function gipotez(a,b){
// c=Math.sqrt(a*a+b*b)
// return c

// }
// console.log(gipotez(10,16))



// let sum=1
// function fakto(n)

// {
//     for(let i=1 ;i<=n; i++)
//     {
//         sum*=i
//     }
//     return sum
// }
// console.log(fakto(5))


// let cnt=0
// function SameNum(a,c) {
//     for(let i=1; i<=a; i/=10) {
//        if(i%10==c)
//        {
//         cnt++;
//        }
//     }
//     return cnt
// }
// console.log(SameNum(6363,3));


// function yearsAndDay(n) {
//     let a=0 
//     let b=0
//      a=(2023-n)
//      b=a*365
//      console.log(a +" " +b);
// }
// console.log(yearsAndDay(2002)); 



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


// function reverceNum(n) {
//     let sum=" "
//     let rev=0
//     for(let i=n; i>0;) {
        
//    rev=sum+=i%10
//     i=Math.floor(i/=10)
//     } 
//     return rev
    // }
//   console.log(reverceNum(453));



// function allNum(a,b,c) {
//     let pos=0
//     let neg=0
//     let zero=0
//     let sum=0
    
//     if(b>0)pos++;
//     if(b<0)neg++;
//     if(b==0)zero++;

//     if(a>0)pos++;
//     if(a<0)neg++;
//     if(a==0)zero++;
    

     
//     if(c>0)pos++;
//     if(c<0)neg++;
//     if(c==0)zero++;
    
//     sum=a+b+c

//     console.log(Sum of entered numbers=${sum} Positive=${pos} Negative=${neg} Zero=${zero});
// }
//      console.log(allNum(2,5,-8));  


function kol(x,d){
  
    let cnt=0;
   
    while(x>0)
    {
        if(n%10==d)
        {
            cnt++;
        }
        x/=10;
  
}
console.log(kol(6363,3));  

    
}
