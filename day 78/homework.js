// function addMatrices(matrix1, matrix2) {
//     return matrix1.map((row, i) =>
//         row.map((value, j) => value + matrix2[i][j])
//     );
// }

// let matrix1 = [[1, 3], [1, 4]];
// let matrix2 = [[4, 1], [2, 2]];

// console.log(addMatrices(matrix1, matrix2));


// function transposeMatrix(matrix) {
//     return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(transposeMatrix(matrix));


// function sumDiagonals(matrix) {
//     let mainDiagonalSum = 0;
//     let secondaryDiagonalSum = 0;
//     let n = matrix.length;

//     for (let i = 0; i < n; i++) {
//         mainDiagonalSum += matrix[i][i];
//         secondaryDiagonalSum += matrix[i][n - i - 1];
//     }

//     return [mainDiagonalSum, secondaryDiagonalSum];
// }

// let matrix = [

//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(sumDiagonals(matrix)); 
