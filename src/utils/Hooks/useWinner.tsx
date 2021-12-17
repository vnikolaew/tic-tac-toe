import React, { useState } from "react";
import { winningCombos } from "../winningCombos";

export function useWinner<T>() {
   const [winner, setWinner] = useState<T | null>(null);

   const checkWinner = (array: T[], sqIdx: number, isNext: T) => {
      winningCombos.forEach((combo, i) => {
         if (!combo.includes(sqIdx)) return;
         const [s1, s2] = combo.filter((s) => s !== sqIdx);
         if (isNext === array[s1] && isNext === array[s2]) {
            setWinner(isNext);
         }
      });
   };

   return { winner, setWinner, checkWinner };
}
