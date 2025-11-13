// Your code here.

function min(number1, number2) {
  if (number1 < number2) {
    return number1;
  }
  if (number1 === number2) {
    return "equal";
  }

  return number2;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(-10, -10));
