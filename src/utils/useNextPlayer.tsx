import React, { useState } from "react";
import { Player } from "../Game";

export const useNextPlayer = (
   startPlayer: Player = "X"
): {
   isNext: Player;
   setIsNext: React.Dispatch<React.SetStateAction<Player>>;
   switchTurns: () => void;
} => {
   const [isNext, setIsNext] = useState<Player>(startPlayer);

   const switchPlayerTurn = () => setIsNext(isNext === "X" ? "O" : "X");

   return { isNext, setIsNext, switchTurns: switchPlayerTurn };
};
