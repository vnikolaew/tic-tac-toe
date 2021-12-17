import React, { useState } from "react";
import { winningCombos } from "./winningCombos";

export function useWinner<T>() {
   const [winner, setWinner] = useState<T | null>(null);

   const checkWinner = (array: T[], sqIdx: number, isNext: T) => {
      winningCombos
         .filter((combo) => combo.includes(sqIdx))
         .map((combo) => combo.filter((s) => s !== sqIdx))
         .forEach(([s1, s2]) => {
            if (isNext === array[s1] && isNext === array[s2]) {
               setWinner(isNext);
            }
         });
   };

   return { winner, setWinner, checkWinner };
}
