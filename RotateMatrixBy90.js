let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate90Clockwise(arr) {
  for (let i = 0; i < 1; i++) {
    for (let j = 7; j <= 9; j++) {
      let temp2,temp3 = [];
    //   temp1 = j;
      temp2 = j - 3;
      temp3 = temp2 - 3;
      console.log([j, temp2, temp3]);
    }
  }
}

rotate90Clockwise(matrix);
