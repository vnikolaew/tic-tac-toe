import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./Game";

ReactDOM.render(
   <React.StrictMode>
      <div className="App">
         <Game />
      </div>
   </React.StrictMode>,
   document.getElementById("root")
);
