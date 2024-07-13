import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(300); // 5 minutes

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-4 text-2xl text-gray-800">
      <h2>
        Time Remaining: {Math.floor(time / 60)}:{time % 60}
      </h2>
    </div>
  );
};

export default Timer;
