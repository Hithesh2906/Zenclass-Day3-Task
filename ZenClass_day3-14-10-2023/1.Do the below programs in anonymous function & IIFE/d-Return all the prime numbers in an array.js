//Anonymous Function
let number=6;
(function (number)
{
   for(let i=2; i<=number; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
      console.log(i);
      }
   }
}
(number));
//we can use this function
let number1=6;
let l=function (number1)
{
   for(let i=2; i<=number1; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
l(number1);

//IIFE 
let number2=5;
(function (number2)
{
   for(let i=2; i<=number2; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
})(number2);