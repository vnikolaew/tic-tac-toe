import React, { useState } from "react";
import { Board } from "./components/Board/Board";
import { winningCombos } from "./utils/winningCombos";
import { useNextPlayer } from "./utils/useNextPlayer";
import { GameHistory } from "./components/GameHistory/GameHistory";
import { BoardHistory } from "./components/GameHistory/GameHistory";
import "./styles/Game.css";
import { useWinner } from "./utils/useWinner";

export type Player = "X" | "O";
export type TSquare = Player | null;

export const Game: React.FC = () => {
   const { isNext, setIsNext, switchTurns } = useNextPlayer("X");
   const { winner, setWinner, checkWinner } = useWinner<TSquare>();

   const [history, setHistory] = useState<BoardHistory[]>(() => [
      {
         squares: Array.from({ length: 9 }, (_) => null),
      },
   ]);

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
      checkWinner(squares, squareIdx, isNext);
      switchTurns();
   };

   return (
      <>
         <div className="Game">
            {" "}
            <h1>
               {winner ? `Winner: ${winner}` : `Current Player:  ${isNext}`}
            </h1>
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
