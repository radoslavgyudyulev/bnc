import * as constants from "../constants";

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

export interface SetUsername {
  type: constants.SET_USERNAME;
  payload: string;
}

export interface GenerateRandomNumbers {
  type: constants.GENERATE_RANDOM_NUMBERS;
  payload: any;
}

export interface SaveTheUser {
  type: constants.SAVE_THE_USER;
}

export interface GetUserGuess {
  type: constants.GET_USER_GUESS;
  payload: number[];
  value: number;
}

export interface SetAllGuesses {
  type: constants.SET_ALL_GUESSES;
  payload: [];
}

export interface FinishTheGame {
  type: constants.RESTART_THE_GAME;
  payload: boolean;
}

export interface ErrorMessage {
  type: constants.ERROR_MESSAGE;
  payload: string;
}

export type ActionsProps = SetUsername &
  GenerateRandomNumbers &
  SaveTheUser &
  GetUserGuess &
  SetAllGuesses &
  FinishTheGame &
  ErrorMessage;
