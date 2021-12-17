import React, { ReactNode } from "react";
import { BoardHistory } from "./GameHistory";

interface JumpBackButtonProps {
   history: BoardHistory[];
   jumpTo: (turn: number) => void;
   children: ReactNode;
}

export const ResetGameButton = ({
   history,
   jumpTo,
   children,
}: JumpBackButtonProps) => {
   return (
      <button
         style={{
            cursor: history.length > 1 ? "pointer" : "",
         }}
         className="reset"
         disabled={history.length === 1}
         onClick={() => {
            jumpTo(0);
         }}
      >
         {children}
      </button>
   );
};
