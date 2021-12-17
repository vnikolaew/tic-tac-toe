import React from "react";
import { TSquare } from "../../Game";
import { SelectMenu } from "./SelectMenu";
import "./SelectMenu.css";

interface EDropdownProps {
   emojis: [TSquare, TSquare];
   setPlayerOneEmoji: (emoji: TSquare) => void;
   setPlayerTwoEmoji: (emoji: TSquare) => void;
}

export const EmojiDropdown: React.FC<EDropdownProps> = ({
   emojis,
   setPlayerOneEmoji,
   setPlayerTwoEmoji,
}) => {
   return (
      <div className="select">
         <SelectMenu
            player={1}
            disabled={emojis[1]}
            setPlayerEmoji={setPlayerOneEmoji}
         />
         <SelectMenu
            player={2}
            disabled={emojis[0]}
            setPlayerEmoji={setPlayerTwoEmoji}
         />
      </div>
   );
};
