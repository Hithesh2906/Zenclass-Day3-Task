//anonymous
var str="my name is hithesh";
(function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
     console.log(str); 
   } 
   return str.join(' ');
}(str));
var str="my name is hithesh";
let def=function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
     console.log(str);
   } 
   return str.join(' ');
}
def(str)

//IIFE
var str="my name is hitheh";
(function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
     console.log(str);
   } 
   return str.join(' ');
})(str);