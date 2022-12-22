//https://leetcode.com/problems/palindrome-number/

let number = 120;

function isPalindrome(x) { //daha az memory alıyor ama yavaş
    const isNegative = x< 0 ? true : false;
      
    if (isNegative){
        return false;
    }
      
    const temp = x;
    let reversed = 0;
      
    while(x>0){
        reversed = (reversed * 10) + (x%10);
        x = parseInt(x/10);
    }
      
    return reversed == temp;
};












function isPalindrome2(x) { //daha hızlı ama daha memory alıyor

    if (x < 0) {
      return false;
    }
  
    if (x < 10) {
      return true;
    }
  
    
    const str = String(x);
    let i = 0, j = str.length - 1;
  
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
  
      i++;
      j--;
    }
  
    return true;
};

console.log(isPalindrome(number));
console.log(isPalindrome2(number));