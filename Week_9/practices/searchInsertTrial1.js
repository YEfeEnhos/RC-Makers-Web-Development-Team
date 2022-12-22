let numArray = [0.5,1,3,5,6];

target = 2;

const searchInsert = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (target <= arr[i]) {
            return i;
        }
    }

}

console.log(searchInsert(numArray, target));


