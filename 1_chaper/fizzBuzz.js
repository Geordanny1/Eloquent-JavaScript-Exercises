function fizzBuzz(number) {
  if (number % 5 === 0 && number % 3 === 0) {
    return "fizzBuzz";
  }
  if (number % 3 === 0 && number % 5 !== 0) {
    return "fizz";
  }
  if (number % 5 === 0 && number % 3 !== 0) {
    return "buzz";
  }

  return number;
}

console.log(fizzBuzz(9)); // fizz
console.log(fizzBuzz(10)); // buzz
console.log(fizzBuzz(7)); // buzz
console.log(fizzBuzz(30)); // fizzbuzz
