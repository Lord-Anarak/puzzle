import { generatePuzzle } from "../services/puzzleService.js";

const getPuzzle = (req, res) => {
  const puzzle = generatePuzzle();
  res.json(puzzle);
};

export { getPuzzle };
