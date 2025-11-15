function reverseArray(arr) {
  let new_arr = [];
  let result = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    new_arr.push(arr[i]);
  }

  for (let i = 0; i <= arr.length - 1; i++) {
    result.push(new_arr.pop());
  }

  return result;
}

function reverseArrayInPlace(arr) {
  let reverseArr = [];
  let times = arr.length - 1;

  for (let i = times; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }

  for (let i = 0; i <= times; i++) {
    arr[i] = reverseArr[i];
  }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
