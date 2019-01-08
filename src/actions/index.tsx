import service from "../components/service";

import * as constants from "../constants";
import { GenerateRandomNumbers, SetUsername, SaveTheUser, GetUserGuess, SetAllGuesses, FinishTheGame, ErrorMessage } from './IActions';

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

export function generateRandomNumbers(): GenerateRandomNumbers {
  return {
    type: constants.GENERATE_RANDOM_NUMBERS,
    payload: service.randomNumberGenerator()
  };
}

export function setUsername(username: string): SetUsername {
  service.saveTheUserInLS(username);
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
    payload: output,
    value: guess
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

export function setErrorMessage(msg: string): ErrorMessage {
  return {
    type: constants.ERROR_MESSAGE,
    payload: msg
  };
}
