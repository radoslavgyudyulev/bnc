export interface StoreState {
  username: string;
  isUsernameSaved: boolean;
  numbers: number[];
  userGuess: number[] | undefined;
  allGuesses: any;
  isGameFinished: boolean;
}
