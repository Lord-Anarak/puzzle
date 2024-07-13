import React, { useState } from "react";

const GameBoard = ({ puzzle }) => {
  const [userInput, setUserInput] = useState(
    puzzle.grid.map((row) => row.map((cell) => ""))
  );

  const handleInputChange = (e, rowIndex, colIndex) => {
    const value = e.target.value;

    // Update user input state
    const updatedInput = [...userInput];
    updatedInput[rowIndex][colIndex] = value;
    setUserInput(updatedInput);

    // Validate user input
    validateInput(value, rowIndex, colIndex);
  };

  const validateInput = (value, rowIndex, colIndex) => {
    // Trim the user input to remove any leading or trailing whitespace
    value = value.trim();

    // Convert value to match the type of puzzle.solution[rowIndex][colIndex] if necessary
    const expectedValue = puzzle.solution[rowIndex][colIndex].toString(); // Convert to string if solution is not always a string

    // Compare the user input with the correct solution
    if (value === expectedValue) {
      console.log("Correct input:", value);
      // Update user input state to reflect correct input
      const updatedInput = userInput.map((row, rIndex) =>
        rIndex === rowIndex
          ? row.map((cell, cIndex) => (cIndex === colIndex ? value : cell))
          : row
      );
      setUserInput(updatedInput);
    } else {
      console.log("Incorrect input:", value);
      // Optionally, update the UI to reflect incorrect input
    }
  };

  return (
    <div className="grid grid-cols-9 gap-1">
      {puzzle.grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            value={
              userInput[rowIndex][colIndex]
                ? userInput[rowIndex][colIndex]
                : cell
            }
            onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
            type="text"
            maxLength="1"
            className={`w-10 h-10 text-center text-xl border rounded bg-white shadow-sm
            ${
              cell ||
              userInput[rowIndex][colIndex] ===
                puzzle.solution[rowIndex][colIndex].toString()
                ? "border-green-500 bg-green-100"
                : "border-red-500 bg-red-100"
            }`}
          />
        ))
      )}
    </div>
  );
};

export default GameBoard;
