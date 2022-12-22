//https://leetcode.com/problems/roman-to-integer/


let roman = "III";

function romanToInt (str) {
  
    let table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        //bir sonraki Roma rakamı daha büyükse, bu sayıyı çıkarmamız gerekiyor
        if (table[str[i]] < table[str[i+1]]) {
            result-=table[s[i]]
        } 
       //değilse ekliyoruz
        else {
            result+=table[str[i]]
        }
    }
    return result
    
};

console.log(romanToInt(roman));