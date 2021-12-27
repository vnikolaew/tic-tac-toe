import React, { ReactNode } from "react";
import { BoardHistory } from "./GameHistory";

interface PlayAgainBtnProps {
   jumpTo: (turn: number) => void;
   children: ReactNode;
}

export const PlayAgainButton = ({ jumpTo, children }: PlayAgainBtnProps) => {
   return (
      <button
         style={{
            cursor: "pointer",
         }}
         className="reset"
         onClick={() => {
            jumpTo(0);
         }}
      >
         {children}
      </button>
   );
};
