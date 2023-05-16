function generateAndPrintSpiralMatrix(rows, columns) {
    let matrix = new Array(rows).fill().map(() => new Array(columns).fill(0));
    let currentNumber = 1;
    let startRow = 0;
    let endRow = rows - 1;
    let startColumn = 0;
    let endColumn = columns - 1;
  
    while (startRow <= endRow && startColumn <= endColumn) {
      // Fill the top row from left to right
      for (let col = startColumn; col <= endColumn; col++) {
        matrix[startRow][col] = currentNumber++;
      }
      startRow++;
  
      // Fill the right column from top to bottom
      for (let row = startRow; row <= endRow; row++) {
        matrix[row][endColumn] = currentNumber++;
      }
      endColumn--;
  
      // Fill the bottom row from right to left
      for (let col = endColumn; col >= startColumn; col--) {
        matrix[endRow][col] = currentNumber++;
      }
      endRow--;
  
      // Fill the left column from bottom to top
      for (let row = endRow; row >= startRow; row--) {
        matrix[row][startColumn] = currentNumber++;
      }
      startColumn++;
    }
  
    for (let row = 0; row < matrix.length; row++) {
      console.log(matrix[row].join(' '));
    }
  }
  
  generateAndPrintSpiralMatrix(5, 5);
  console.log('---');
  generateAndPrintSpiralMatrix(3, 3);
  
