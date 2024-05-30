function isSubset(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) if (arr2[i] == arr1[j]) break;

    if (j == m) return false;
  }

  return true;
}

let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [11, 3, 7, 1];

if (isSubset(arr1, arr2)) console.log("arr2[] is " + "subset of arr1[] ");
else console.log("arr2[] is " + "not a subset of arr1[]");
