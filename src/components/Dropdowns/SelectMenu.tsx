import { Emojis } from "../../utils/Emojis";
import React, { useRef } from "react";
import { TSquare } from "../../Game";
import "./SelectMenu.css";

interface IProps {
   player: number;
   disabled: TSquare;
   setPlayerEmoji: (emoji: TSquare) => void;
}

export const SelectMenu: React.FC<IProps> = ({
   player,
   disabled,
   setPlayerEmoji,
}) => {
   const selectRef = useRef<HTMLSelectElement>(null);

   return (
      <div>
         {" "}
         <h1> Player {player}: </h1>
         <select
            name={`Player ${player}`}
            ref={selectRef}
            id={`${player}`}
            defaultValue={player === 1 ? "X" : "O"}
            onChange={(e) => {
               selectRef.current!.value = e.target.value;
               setPlayerEmoji(e.target.value as TSquare);
            }}
         >
            {Emojis.map((e, i) => (
               <option value={e} key={i} disabled={e === disabled}>
                  {e}
               </option>
            ))}
         </select>
      </div>
   );
};
