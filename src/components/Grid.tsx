import React from "react";
import TiltCard from "./TiltCard"; // Make sure to adjust the import path

// Define the grid for the word "HI"
const grid = [
  '111111',
  '111111',
  '111111',
  '111111',
  '111111',
  '111111',
];

const HIGrid = () => {
  return (
    <div className="grid grid-cols-6 gap-0 w-72">
      {grid.map((row, rowIndex) =>
        row.split('').map((char, colIndex) => (
          char === '1' ? (
            <TiltCard
              key={`${rowIndex}-${colIndex}`}
            />
          ) : (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{ width: '10px', height: '10px' }} // Empty space
            />
          )
        ))
      )}
    </div>
  );
};

export default HIGrid;
