export enum Emoji {
   ROCKET = "🚀",
   FIRE = "🔥",
   GIFT = "🎁",
   SANTA = "🎅",
}

export type Player = "X" | "O";
export type TSquare = Player | Emoji | null;

export const Emojis: (Emoji | Player)[] = ["O", "X", ...Object.values(Emoji)];
