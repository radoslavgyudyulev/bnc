import * as constants from "../constants";

import service from "../components/service";

export interface SetUsername {
  type: constants.SET_USERNAME;
  payload: string;
}

interface GenerateRandomNumbers {
  type: constants.GENERATE_RANDOM_NUMBERS;
  payload: any;
}

interface SaveTheUser {
  type: constants.SAVE_THE_USER;
}

interface GetUserGuess {
  type: constants.GET_USER_GUESS;
  payload: number[];
}

interface SetAllGuesses {
  type: constants.SET_ALL_GUESSES;
  payload: [];
}

interface FinishTheGame {
  type: constants.RESTART_THE_GAME;
  payload: boolean;
}

export type ActionsProps = SetUsername &
  GenerateRandomNumbers &
  SaveTheUser &
  GetUserGuess &
  SetAllGuesses &
  FinishTheGame;

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

export function generateRandomNumbers(): GenerateRandomNumbers {
  return {
    type: constants.GENERATE_RANDOM_NUMBERS,
    payload: service.randomNumberGenerator()
  };
}

export function setUsername(username: string): SetUsername {
  return {
    type: constants.SET_USERNAME,
    payload: username
  };
}

export function saveTheUser(): SaveTheUser {
  return {
    type: constants.SAVE_THE_USER
  };
}

export function getUserGuess(guess: number): GetUserGuess {
  const output = [];
  const sNumber = guess.toString();

  for (let i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }
  return {
    type: constants.GET_USER_GUESS,
    payload: output
  };
}

export function setAllGuesses(allGuesses: []): SetAllGuesses {
  return {
    type: constants.SET_ALL_GUESSES,
    payload: allGuesses
  };
}

export function restartTheGame(condition: boolean): FinishTheGame {
  return {
    type: constants.RESTART_THE_GAME,
    payload: condition
  };
}
