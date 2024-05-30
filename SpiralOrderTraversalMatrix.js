function printSpiralRecursive(matrix, k, m, l, n) {
  if (k > m || l > n) {
    return "";
  }

  let result = "";

  for (let i = l; i <= n; i++) {
    result += matrix[k][i] + " ";
  }
  k++;

  for (let i = k; i <= m; i++) {
    result += matrix[i][n] + " ";
  }
  n--;

  if (k <= m) {
    for (let i = n; i >= l; i--) {
      result += matrix[m][i] + " ";
    }
    m--;
  }

  if (l <= n) {
    for (let i = m; i >= k; i--) {
      result += matrix[i][l] + " ";
    }
    l++;
  }

//   newArr.push(result)
  return [result + printSpiralRecursive(matrix, k, m, l, n)];
}

function printSpiral(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const spiralResult = printSpiralRecursive(
    matrix,
    0,
    rows - 1,
    0,
    columns - 1
  );
  console.log(spiralResult);
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

printSpiral(matrix);
