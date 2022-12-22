//https://leetcode.com/problems/happy-number/

let number = 19;

function isHappy(n) {
    discovered = {}

    while(n !== 1){
        let current = n;
        let sum = 0;
        while(current !== 0){
            sum += (current%10)**2
            current = Math.floor(current/10);
        }
        if (discovered[sum]){
            return false
        }
        
        discovered[sum] = true;
        n = sum;
    }
    return true
}

console.log(isHappy(number));