import React, { useState } from "react";
import { Player } from "../Game";

export const useNextPlayer = (
   startPlayer: Player = "X"
): {
   xIsNext: boolean;
   setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
   switchTurns: () => void;
} => {
   const [xIsNext, setIsNext] = useState<boolean>(true);

   const switchPlayerTurn = () => setIsNext(!xIsNext);

   return { xIsNext, setIsNext, switchTurns: switchPlayerTurn };
};
