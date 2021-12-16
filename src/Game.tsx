import React, { useState } from "react";
import { Board } from "./components/Board/Board";
import { winningCombos } from "./utils/winningCombos";
import { useNextPlayer } from "./utils/useNextPlayer";
import { GameHistory } from "./components/GameHistory/GameHistory";
import { BoardHistory } from "./components/GameHistory/GameHistory";
import "./Game.css";

export type TSquare = "X" | "O" | null;
export type Player = "X" | "O";

export const Game: React.FC = () => {
   const { isNext, setIsNext, switchTurns } = useNextPlayer("X");
   const [winner, setWinner] = useState<TSquare>(null);

   const [history, setHistory] = useState<BoardHistory[]>(() => [
      {
         squares: Array.from({ length: 9 }, (_) => null),
      },
   ]);

   if (history.length === 1) {
      console.log("Length is 1");
   }

   const squares = history[history.length - 1].squares;

   const goBackTo = (turn: number) => {
      setIsNext(turn % 2 === 0 ? "X" : "O");
      setHistory(history.slice(0, turn + 1));
      setWinner(null);
   };

   const fillSquare = (squareIdx: number) => {
      if (squares[squareIdx] || winner) return;

      const updatedBoard = squares.map((sq, id) => {
         return squareIdx === id ? isNext : sq;
      });

      setHistory([
         ...history,
         {
            squares: updatedBoard,
         },
      ]);
      checkWinner(squareIdx);
      switchTurns();
   };

   const checkWinner = (sqIdx: number) => {
      winningCombos
         .filter((combo) => combo.includes(sqIdx))
         .map((combo) => combo.filter((s) => s !== sqIdx))
         .forEach(([s1, s2]) => {
            if (isNext === squares[s1] && isNext === squares[s2]) {
               setWinner(isNext);
            }
         });
   };

   return (
      <>
         <div className="Game">
            {" "}
            {winner ? `Winner: ${winner}` : `Current Player:  ${isNext}`}
            <Board squares={squares} fillSquare={fillSquare} />
            <button
               style={{
                  cursor: history.length > 1 ? "pointer" : "",
               }}
               className="reset"
               disabled={history.length === 1}
               onClick={() => {
                  goBackTo(0);
               }}
            >
               Reset!
            </button>
         </div>
         <GameHistory history={history} onClick={goBackTo} />
      </>
   );
};

export default Game;
