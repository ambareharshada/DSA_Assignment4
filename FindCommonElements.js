let M = 4;
let N = 5;

function printCommonElements(mat) {
  let mp = new Map();

  for (let j = 0; j < N; j++) mp.set(mat[0][j], 1);

  for (let i = 1; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (mp.get(mat[i][j]) != null && mp.get(mat[i][j]) == i) {
        mp.set(mat[i][j], i + 1);
        if (i == M - 1) console.log(mat[i][j] + " ");
      }
    }
  }
}

let mat = [
  [1, 2, 1, 4, 8],
  [3, 7, 8, 5, 1],
  [8, 7, 7, 3, 1],
  [8, 1, 2, 7, 9],
];
printCommonElements(mat);
