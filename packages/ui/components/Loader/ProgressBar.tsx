import { useEffect, useState } from "react";

import { Title } from "../Typo/Title";

export const ProgressBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visited, setVisited] = useState(new Array(20).fill(false));
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedIndex((current) => {
        const next = (current + 1) % 20;

        setVisited((prevVisited) => [
          ...prevVisited.slice(0, next),
          true,
          ...prevVisited.slice(next + 1),
        ]);

        setCounter((prevCount) => {
          if (prevCount + 5 >= 100) {
            clearInterval(intervalId);
          }
          return (prevCount + 5) % 101;
        });

        return next;
      });
    }, 4000 / 30);

    return () => clearInterval(intervalId);
  }, []);

  const data = Array(20).fill(0);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              height: "10px",
              width: "10px",
              borderRadius: "100%",
              background:
                visited[index] || index === selectedIndex || index === 0
                  ? "black"
                  : "white",
            }}
          />
        ))}
      </div>
      <Title size="big" color="white">
        {counter}%
      </Title>
    </div>
  );
};
