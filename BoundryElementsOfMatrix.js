function boundaryTraversal(matrix) {
  const ans = [];

  const n = matrix.length;
  const m = matrix[0].length;

  if (n === 1) {
    for (let i = 0; i < m; i++) {
      ans.push(matrix[0][i]);
    }
    return ans;
  }

  if (m === 1) {
    for (let i = 0; i < n; i++) {
      ans.push(matrix[i][0]);
    }
    return ans;
  }

  for (let i = 0; i < m; i++) {
    ans.push(matrix[0][i]);
  }

  for (let i = 1; i < n; i++) {
    ans.push(matrix[i][m - 1]);
  }

  for (let i = m - 2; i >= 0; i--) {
    ans.push(matrix[n - 1][i]);
  }

  for (let i = n - 2; i > 0; i--) {
    ans.push(matrix[i][0]);
  }

  return ans;
}

const n = 3,
  m = 3;
const matrix = [
  [1, 2, 3],
  [5, 6, 7],
  [1, 2, 3],
];

const result = boundaryTraversal(matrix);

// console.log( result.join(" "));
const numbers = result;
const rows = 3;
const cols = 3;

let newArray = new Array(rows);
let index = 0;

for (let i = 0; i < rows; i++) {
    newArray[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
        newArray[i][j] = numbers[index++];
    }
}

// Print the matrix
for (let i = 0; i < rows; i++) {
    console.log(newArray[i].join(' '));
}
