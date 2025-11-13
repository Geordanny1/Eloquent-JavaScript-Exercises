function countBs(word) {
  let appers = [];
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
    if (word[i] === "B") {
      appers.push(word[i]);
    }
  }
  return appers.length;
}

function countChar(word, target) {
  let appers = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === target) {
      appers.push(word[i]);
    }
  }
  return appers.length;
}

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
