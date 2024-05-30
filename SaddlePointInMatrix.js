function findSaddlePoint(matrix) {
    let saddlePoints = [];
    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        // Find the minimum element in the row
        let rowMin = matrix[i][0];
        let colIndex = 0;

        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] < rowMin) {
                rowMin = matrix[i][j];
                colIndex = j;
            }
        }

        // Check if the found minimum element is the maximum in its column
        let isSaddlePoint = true;
        for (let k = 0; k < rows; k++) {
            if (matrix[k][colIndex] > rowMin) {
                isSaddlePoint = false;
                break;
            }
        }

        if (isSaddlePoint) {
            saddlePoints.push({row: i, col: colIndex, value: rowMin});
        }
    }

    return saddlePoints;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let saddlePoints = findSaddlePoint(matrix);

if (saddlePoints.length > 0) {
    saddlePoints.forEach(point => {
        console.log(`Saddle Point Found. Number ${point.value} is minimum in its row and maximum in its column.`);
    });
} else {
    console.log("No saddle point found.");
}
