import React, { useEffect, useState } from "react";
import puzzleServices from "../services/puzzleServices";
import GameBoard from "../components/GameBoard";
import Timer from "../components/Timer";
import Scoreboard from "../components/ScoreBoard";

const Home = () => {
  const [puzzle, setPuzzle] = useState(null);

  useEffect(() => {
    const fetchPuzzle = async () => {
      const data = await puzzleServices.getPuzzle();
      setPuzzle(data);
    };
    fetchPuzzle();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 my-8">Puzzle Game</h1>
      {puzzle && <GameBoard puzzle={puzzle} />}
      <Timer />
      <Scoreboard />
    </div>
  );
};

export default Home;
