import * as React from "react";

import Input from "./Input";
import NewGame from "./NewGame";

const Game = () => {
  return (
    <div className="game-container">
      <header>Bulls and Cows</header>
      <Input />
      <NewGame />
    </div>
  );
};

export default Game;
