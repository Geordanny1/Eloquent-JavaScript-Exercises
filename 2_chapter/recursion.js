function isEven(number) {
  if (number < 1) {
    return "negative number";
  }

  if (number % 2 === 0) {
    return true;
  }
  if (number % 2 === 1) {
    return false;
  }

  isEven(number - 1);
}

console.log(isEven(50));
// → true
console.log(isEven(75));

console.log(isEven(3));
// → false
console.log(isEven(-1));
// → ??
