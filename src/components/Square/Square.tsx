import React, { CSSProperties, useState } from "react";
import { TSquare } from "../../utils/Types&Enums";
import "./Square.css";

interface SquareProps {
   size?: number;
   value: TSquare;
   handleClick: React.MouseEventHandler<HTMLElement>;
}

export const Square: React.FC<SquareProps> = ({
   size = 150,
   value,
   handleClick,
}) => {
   const [style, setStyle] = useState<CSSProperties | null>(null);
   return (
      <div
         className="square"
         style={{
            width: `${size}px`,
            height: `${size}px`,
            cursor: value ? "" : "pointer",
            color: style?.color,
            backgroundColor: style?.backgroundColor,
         }}
         onClick={handleClick}
         onMouseEnter={() => {
            setStyle(() => {
               return value
                  ? null
                  : {
                       color: "rgb(9, 20, 41)",
                       backgroundColor: "rgb(143, 143, 143)",
                    };
            });
         }}
         onMouseLeave={() => {
            setStyle(null);
         }}
      >
         {value}
      </div>
   );
};
