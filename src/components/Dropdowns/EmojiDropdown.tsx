import React from "react";
import { Tuple } from "../../utils/Hooks/useTuples";
import { TSquare } from "../../utils/Types&Enums";
import { SelectMenu } from "./SelectMenu";
import "./SelectMenu.css";

interface IProps {
   emojis: Tuple<TSquare>;
   setPlayerEmojis: Tuple<(emoji: TSquare) => void>;
}

export const EmojiSelectionContainer: React.FC<IProps> = ({
   emojis,
   setPlayerEmojis,
}) => {
   const [playerTwoDisabled, playerOneDisabled] = emojis;
   const [setPlayerOneEmoji, setPlayerTwoEmoji] = setPlayerEmojis;
   return (
      <div className="select">
         <h1>Select your emojis: </h1>
         <SelectMenu
            player={1}
            disabled={playerOneDisabled}
            setPlayerEmoji={setPlayerOneEmoji}
         />
         <SelectMenu
            player={2}
            disabled={playerTwoDisabled}
            setPlayerEmoji={setPlayerTwoEmoji}
         />
      </div>
   );
};
