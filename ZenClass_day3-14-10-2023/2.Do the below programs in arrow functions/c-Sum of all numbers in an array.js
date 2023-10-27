var a=[1,2,3,4,5,6,7,8,9,10,11,12,13];
var sum=0;
let raj=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(raj(a));