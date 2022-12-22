//https://leetcode.com/problems/search-insert-position/



let array = [2,6,7,56,78];
let num = 3;


function searchInsert (nums, target) {

    for (let index = 0; index < nums.length; index++) {
      if (target <= nums[index]) {
        return index;
      }
    }
    return nums.length;
};

console.log (searchInsert(array, num));