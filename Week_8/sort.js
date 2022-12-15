let arr = [1,24,5,7,849,0];
let narr = [];

length = arr.length;

function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) { //bu kısım sayesinde index yerine undifined gelmiyor 
      arr.splice(index, 1);
    }
    return arr;
} //2 saat boyunca bu fonksiyonu yapsak direkt bitiyordu 
//Yazıklar olsun

for (let i = 0; i< length; i++){
    let minadd = myArrayMin(arr);
    removeItemOnce(arr, minadd);
    narr.push(minadd);
}

console.log(narr)