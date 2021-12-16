import React from "react";
import { FC } from "react";
import { TSquare } from "../../Game";
import "./History.css";

export interface BoardHistory {
   squares: TSquare[];
}

interface GameHistoryProps {
   history: BoardHistory[];
   onClick: (turn: number) => void;
}

export const GameHistory: FC<GameHistoryProps> = ({ history, onClick }) => {
   return (
      <div className="history">
         {history.length === 1 ? (
            <h2>Click for some fun! </h2>
         ) : (
            <>
               <button onClick={() => onClick(0)}>
                  {" "}
                  Go back to the beginning!
               </button>
               {history.slice(1, -1).map((turn, i) => (
                  <div key={i} className="turn">
                     <h2>Player: {i % 2 === 1 ? "X" : "O"}</h2>
                     <div>State: {turn.squares.join(", ")}</div>
                     <button onClick={() => onClick(i + 1)}>
                        Go back to turn #{i + 1}
                     </button>
                  </div>
               ))}
            </>
         )}
      </div>
   );
};
