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
         {squares.map((s, i) => (
            <Square
               size={150}
               key={i}
               value={s}
               onClick={(e) => fillSquare(i)}
            />
         ))}
      </div>
   );
};
