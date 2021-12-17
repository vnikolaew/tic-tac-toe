import React from "react";
import { TSquare } from "../../Game";
import { SelectMenu } from "./SelectMenu";
import "./SelectMenu.css";

interface ESelectionContainerProps {
   emojis: [TSquare, TSquare];
   setPlayerOneEmoji: (emoji: TSquare) => void;
   setPlayerTwoEmoji: (emoji: TSquare) => void;
}

export const EmojiSelectionContainer: React.FC<ESelectionContainerProps> = ({
   emojis,
   setPlayerOneEmoji,
   setPlayerTwoEmoji,
}) => {
   const [playerTwoDisabled, playerOneDisabled] = emojis;
   return (
      <div className="select">
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
