value1 = 343;

value2 = 241;

var isPalindrome = function(x) {
    const isNegative = x < 0 ? true : false;

   if (isNegative) {
       return false;
   }

   let text = x.toString();

   let textReverse = text.split('').reverse().join('')

   if (text == textReverse) {
       return true;
   } else {
       return false;
   }
};