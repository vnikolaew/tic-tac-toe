import React from "react";
import { Player, TSquare } from "../../utils/Types&Enums";
import { Square } from "../Square/Square";
import "./Board.css";

interface BoardProps {
   squares: (Player | null)[];
   emojis: [TSquare, TSquare];
   fillSquare: (idx: number) => void;
}

export const Board: React.FC<BoardProps> = ({
   squares,
   emojis,
   fillSquare,
}) => {
   return (
      <div className="board">
         {squares.map((value, i) => (
            <Square
               key={i}
               size={130}
               value={value && (value === "X" ? emojis[0] : emojis[1])}
               handleClick={() => fillSquare(i)}
            />
         ))}
      </div>
   );
};
