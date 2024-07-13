const generatePuzzle = () => {
  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Function to create a solved Sudoku grid
  const createSolvedGrid = () => {
    const baseGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const solvedGrid = [];

    for (let i = 0; i < 9; i++) {
      const row = baseGrid.slice(i).concat(baseGrid.slice(0, i));
      solvedGrid.push(shuffleArray(row));
    }

    return solvedGrid;
  };

  // Function to remove elements from the solved grid to create a puzzle
  const createPuzzle = (solvedGrid) => {
    const puzzleGrid = solvedGrid.map((row) => row.slice());
    const difficulty = 40;

    for (let i = 0; i < difficulty; i++) {
      const rowIndex = Math.floor(Math.random() * 9);
      const colIndex = Math.floor(Math.random() * 9);
      puzzleGrid[rowIndex][colIndex] = "";
    }

    return puzzleGrid;
  };

  // Generate the puzzle
  const solvedGrid = createSolvedGrid();
  const puzzleGrid = createPuzzle(solvedGrid);

  return {
    grid: puzzleGrid,
    solution: solvedGrid,
  };
};

export { generatePuzzle };
