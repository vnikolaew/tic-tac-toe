import { FC } from "react";
import { Player } from "../../utils/Types&Enums";
import "./History.css";

export interface BoardHistory {
   squares: (Player | null)[];
}

interface GameHistoryProps {
   history: BoardHistory[];
   onClick: (turn: number) => void;
}

export const GameHistory: FC<GameHistoryProps> = ({ history, onClick }) => {
   const isAtBeginning = history.length === 1;
   return (
      <div className="history">
         {isAtBeginning ? (
            <h2>Click for some fun! 😮</h2>
         ) : (
            <>
               <h1>
                  {" "}
                  Try time <br /> travelling! 🔙
               </h1>
               <select
                  name="time-travel"
                  id="time-travel"
                  value={`Go back to: `}
                  onChange={(e) => {
                     onClick(+e.target.value);
                  }}
               >
                  <option value="Go back to: " disabled={true}>
                     Go back to:{" "}
                  </option>
                  {history.slice(0, -1).map(({ squares }, i) => (
                     <option value={i} key={i} className="option">
                        {`Turn #${i + 1}`}
                     </option>
                  ))}
               </select>
            </>
         )}
      </div>
   );
};
