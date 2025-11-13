function countBs(word) {
  let appers = [];
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
    if ((word[i] = word[i + 1])) {
      appers.push(word[i]);
    }
  }
  return appers.length;
}

// this thing is insane in one it should be = and the other one should be either == or ===

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
