//Anonymous
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
(function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
     console.log([sum]);
   }
   return sum;
}(a));
//we can use this function
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let hi=function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
     console.log([sum]);
   }
   return sum;
}
hi(a);

//IIFE
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
(function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
     console.log([sum]);
   }
   return sum;
})(a);