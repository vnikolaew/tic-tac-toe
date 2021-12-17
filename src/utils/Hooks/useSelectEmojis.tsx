import React, { useState } from "react";
import { TSquare } from "../../utils/Types&Enums";

interface useSelectEmojiProps {
   initialEmojis?: [TSquare, TSquare];
}

export const useSelectEmojis = ({
   initialEmojis = ["X", "O"],
}: useSelectEmojiProps = {}) => {
   const [emojis, setEmojis] = useState<[TSquare, TSquare]>(initialEmojis);

   const setPlayerOneEmoji = (emoji: TSquare) => {
      return setEmojis(([prevEmoji, _]) => {
         return [emoji, emojis[1]];
      });
   };

   const setPlayerTwoEmoji = (emoji: TSquare) => {
      return setEmojis(([_, prevEmoji]) => {
         return [emojis[0], emoji];
      });
   };

   return { emojis, setPlayerOneEmoji, setPlayerTwoEmoji };
};
