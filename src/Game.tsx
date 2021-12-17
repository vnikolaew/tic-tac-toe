import React from "react";

import { Board } from "./components/Board/Board";
import { GameHistory } from "./components/GameHistory/GameHistory";
import { EmojiSelectionContainer } from "./components/Dropdowns/EmojiDropdown";

import { useNextPlayer } from "./utils/Hooks/useNextPlayer";
import { useSelectEmojis } from "./utils/Hooks/useSelectEmojis";
import { useWinner } from "./utils/Hooks/useWinner";
import { Player } from "./utils/Types&Enums";
import { useHistory } from "./utils/Hooks/useHistory";
import { ResetGameButton } from "./components/GameHistory/ResetGameButton";
import "./styles/Game.css";

export const Game: React.FC = () => {
   const { xIsNext, setIsNext, switchTurns } = useNextPlayer();
   const { winner, setWinner, checkWinner } = useWinner<Player | null>();
   const { history, pushMoveToHistory, setHistory } = useHistory();

   const squares = history[history.length - 1].squares;

   const { emojis, setPlayerOneEmoji, setPlayerTwoEmoji } = useSelectEmojis();

   const goBackTo = (turn: number) => {
      setIsNext(turn % 2 === 0);
      setHistory(history.slice(0, turn + 1));
      setWinner(null);
   };

   const fillSquare = (squareIdx: number) => {
      if (squares[squareIdx] || winner) return;

      const updatedBoard = squares.map((sq, id) => {
         return squareIdx === id ? (xIsNext ? "X" : "O") : sq;
      });

      pushMoveToHistory(updatedBoard);

      const nextPlayer = xIsNext ? "X" : "O";
      checkWinner(squares, squareIdx, nextPlayer);
      switchTurns();
   };

   return (
      <>
         <EmojiSelectionContainer
            emojis={emojis}
            setPlayerOneEmoji={setPlayerOneEmoji}
            setPlayerTwoEmoji={setPlayerTwoEmoji}
         />
         <div className="Game">
            {" "}
            <h1>
               {winner
                  ? `Winner: ${winner === "X" ? emojis[0] : emojis[1]} !`
                  : `Current Player:  ${xIsNext ? emojis[0] : emojis[1]}`}
            </h1>
            <Board squares={squares} emojis={emojis} fillSquare={fillSquare} />
            <ResetGameButton history={history} jumpTo={goBackTo}>
               {winner ? "Play again!" : "Reset"}
            </ResetGameButton>
         </div>
         <GameHistory history={history} onClick={goBackTo} />
      </>
   );
};

export default Game;
