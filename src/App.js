import React from "react";
import "./App.css";
import Board from "./components/board";
import "bootstrap/dist/css/bootstrap.min.css";
import Instructions from "./components/instructions";
// https://krazydad.com/kakuro/
function App() {
  return (
    <div className="App">
      <Instructions />

      <Board />
    </div>
  );
}

export default App;
