//https://leetcode.com/problems/climbing-stairs/

let numberOfSteps = 9;

function climbStairs(n) { //iterasyon
    if (n == 1 || n == 0){
        return 1 
    } 

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;

};

const cache = {
    "0": 0,
    "1": 1,
    "2": 2,
  };
  
function climbStairs2 (n) { //dynamic 
    if (n <= 1){
        return n;
    };
    for (let i = 3; i <= n; i++) {
      cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
};

function climbStairs3(n) { // recursion
    if (n <= 1) return n; //if statementalar böyle de yazılıyor 
    return climbStairs3(n - 1) + climbStairs(n - 2);
}

console.log(climbStairs(numberOfSteps));
console.log(climbStairs2(numberOfSteps));
console.log(climbStairs3(numberOfSteps));