import React from "react";
import { TSquare } from "../../Game";
import { Square } from "../Square/Square";
import "./Board.css";

interface BoardProps {
   squares: TSquare[];
   fillSquare: (idx: number) => void;
}

export const Board: React.FC<BoardProps> = ({ squares, fillSquare }) => {
   return (
      <div className="board">
         {squares.map((value, i) => (
            <Square
               size={130}
               key={i}
               value={value}
               onClick={(_) => fillSquare(i)}
            />
         ))}
      </div>
   );
};
