import * as React from "react";

import Input from "./Input";
import Guesses from "./Guesses";
import NewGame from "./NewGame";

const Game = () => {
  return (
    <div>
      <Input />
      <Guesses />
      <NewGame />
    </div>
  );
};

export default Game;
