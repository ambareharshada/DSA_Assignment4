let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  function transposeOfMatrix(arr) {
    for (let i = 0; i < 1; i++) {
      for (let j = 1; j <= 3; j++) {
        let temp1,temp2,temp3 = [];
        temp1 = j;
        temp2 = temp1 + 3;
        temp3 = temp2 + 3;
        console.log([temp1, temp2, temp3]);
      }
    }
  }
  
  transposeOfMatrix(matrix);
  