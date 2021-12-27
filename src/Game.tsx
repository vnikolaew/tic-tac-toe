import { FC } from "react";
import { Board } from "./components/Board/Board";
import { EmojiSelectionContainer } from "./components/Dropdowns/EmojiDropdown";
import { GameHistory } from "./components/GameHistory/GameHistory";
import { PlayAgainButton } from "./components/GameHistory/PlayAgainButton";
import {
   useHistory,
   useNextPlayer,
   useTuples,
   useWinner,
} from "./utils/Hooks/index";
import { Player, TSquare } from "./utils/Types&Enums";
import "./styles/Game.css";

export const Game: FC = () => {
   const { xIsNext, setIsNext, switchTurns } = useNextPlayer();
   const { winner, setWinner, checkWinner } = useWinner<Player | null>();
   const { history, pushMoveToHistory, setHistory } = useHistory();

   const squares = history[history.length - 1].squares;

   const {
      values: [emojiOne, emojiTwo],
      setFirstValue: setPlayerOneEmoji,
      setSecondValue: setPlayerTwoEmoji,
   } = useTuples<TSquare>(["X", "O"]);

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
      <div className="App">
         <EmojiSelectionContainer
            emojis={[emojiOne, emojiTwo]}
            setPlayerEmojis={[setPlayerOneEmoji, setPlayerTwoEmoji]}
         />
         <div className="Game">
            {" "}
            <h1>
               {winner
                  ? `Winner: ${winner === "X" ? emojiOne : emojiTwo} !`
                  : `Current Player:  ${xIsNext ? emojiOne : emojiTwo}`}
            </h1>
            <Board
               squares={squares}
               emojis={[emojiOne, emojiTwo]}
               fillSquare={fillSquare}
            />
            {winner && (
               <PlayAgainButton jumpTo={goBackTo}>
                  {"Play again!"}
               </PlayAgainButton>
            )}
         </div>
         <GameHistory history={history} onClick={goBackTo} />
      </div>
   );
};

export default Game;
