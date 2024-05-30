let matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];
const target = 29;

function searchInMatrix(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === target) {
        // console.log("Result = Found", true);
        return 1;
      }
    }
  }
  //   console.log("Result = Not Found", false);
  return 0;
}
var data = searchInMatrix(matrix);
if (data === 1) {
  console.log("Target Number", target, " Found In Matrix");
} else {
  console.log("Target Number", target, " NOT Found In Matrix");
}
