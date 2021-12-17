import React, { CSSProperties, useState } from "react";
import { TSquare } from "../../Game";
import "./Square.css";

interface SquareProps {
   size?: number;
   value: TSquare;
   onClick: React.MouseEventHandler<HTMLElement>;
}

export const Square: React.FC<SquareProps> = ({
   size = 150,
   value,
   onClick,
}) => {
   const [squareStyle, setSquareStyle] = useState<CSSProperties | null>(null);
   return (
      <div
         className="square"
         style={{
            width: `${size}px`,
            height: `${size}px`,
            cursor: value ? "" : "pointer",
            color: squareStyle?.color,
            backgroundColor: squareStyle?.backgroundColor,
         }}
         onClick={onClick}
         onMouseEnter={() => {
            setSquareStyle(() => {
               return value
                  ? null
                  : {
                       color: "rgb(9, 20, 41)",
                       backgroundColor: "rgb(143, 143, 143)",
                    };
            });
         }}
         onMouseLeave={() => {
            setSquareStyle(null);
         }}
      >
         {value}
      </div>
   );
};
