import { useState } from "react";
import { BoardHistory } from "../components/GameHistory/GameHistory";
import { Player, TSquare } from "../Game";

interface useHistoryParams {
   initialBoard?: (Player | null)[];
}

export const useHistory = ({
   initialBoard = Array.from({ length: 9 }, (_) => null),
}: useHistoryParams = {}) => {
   const [history, setHistory] = useState<BoardHistory[]>(() => [
      {
         squares: initialBoard,
      },
   ]);

   const pushMove = (updatedBoard: (Player | null)[]) =>
      setHistory((oldHistory) => {
         return [
            ...oldHistory,
            {
               squares: updatedBoard,
            },
         ];
      });

   return { history, pushMove, setHistory };
};
