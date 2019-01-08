// export interface IAllGuesses {
//   guess: Array<number>;
//   checker: {
//     bulls: string;
//     cows: string;
//   };
// }

export interface StoreState {
  username: string;
  isUsernameSaved: boolean;
  numbers: number[];
  userGuess: number[] | undefined;
  allGuesses: any;
  isGameFinished: boolean;
  errorMessage: string | undefined;
  numberInputValue: number | any;
}
