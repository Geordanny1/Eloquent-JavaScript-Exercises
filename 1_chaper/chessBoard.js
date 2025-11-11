let chessBoard = "";

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    if ((j + i) % 2 === 0) {
      chessBoard += " ";
    } else {
      chessBoard += "#";
    }
  }

  chessBoard += "\n";
}

console.log(chessBoard);
