import { Player } from "../Game";

export enum Emoji {
   ROCKET = "🚀",
   FIRE = "🔥",
   GIFT = "🎁",
   SANTA = "🎅",
}

export const Emojis: (Emoji | Player)[] = [
   "O",
   "X",
   Emoji.FIRE,
   Emoji.ROCKET,
   Emoji.GIFT,
   Emoji.SANTA,
];
