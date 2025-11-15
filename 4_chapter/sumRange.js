// Your code here.

function range(start, end) {
  let arr = [];

  if (start > end) {
    for (let i = start; i >= end; i--) {
      arr.push(i);
    }
    return arr;
  }

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

function sum(arr) {
  result = arr.reduce((accum, currentValue) => accum + currentValue);

  return result;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
