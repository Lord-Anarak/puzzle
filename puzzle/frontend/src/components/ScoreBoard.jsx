import React, { useEffect, useState } from "react";
import axios from "axios";

const ScoreBoard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const response = await axios.get("http://178.128.203.28:3000/api/scores");
      setScores(response.data);
    };
    fetchScores();
  }, []);

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">High Scores</h2>
      <ul className="list-none p-0">
        {scores.map((score, index) => (
          <li key={index} className="bg-white mb-2 p-2 rounded shadow-sm">
            {score.username}: {score.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreBoard;
