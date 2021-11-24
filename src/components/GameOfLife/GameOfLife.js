import React, { useCallback, useState, useRef } from "react";
import produce from "immer";

const numRows = 25;
const numCols = 65;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

export const GameOfLife = () => {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  // console.log(grid);
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numRows; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 100);
  }, []);
  return (
    <div style={{ padding: "10px" }}>
      <>
        {/* <input value="Learn Golang" type="text" /> */}

        <button
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
            // console.log("clicked")
          }}
        >
          {" "}
          {running ? "stop" : "start"}
        </button>

        <button
          onClick={() => {
            setGrid(generateEmptyGrid());
          }}
        >
          {" "}
          clear
        </button>

        <button
          onClick={() => {
            const rows = [];
            for (let i = 0; i < numRows; i++) {
              rows.push(
                Array.from(Array(numCols), () => (Math.random() > 0.5 ? 1 : 0))
              );
            }
            setGrid(rows);
          }}
        >
          {" "}
          random
        </button>
      </>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols},20px)`,
          marginTop: "15px",
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? "#2F4858" : undefined,

                border: "solid 1px black",
              }}
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
};
