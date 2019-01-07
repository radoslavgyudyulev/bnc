import { StoreState } from "../types/index";
import {
  GENERATE_RANDOM_NUMBERS,
  SET_USERNAME,
  SAVE_THE_USER,
  GET_USER_GUESS,
  SET_ALL_GUESSES,
  RESTART_THE_GAME
} from "../constants/index";
import { ActionsProps } from "src/actions";

export function cowsnbulls(
  state: StoreState,
  action: ActionsProps
): StoreState {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case GENERATE_RANDOM_NUMBERS:
      return { ...state, numbers: action.payload };
    case SAVE_THE_USER:
      return { ...state, isUsernameSaved: true };
    case GET_USER_GUESS:
      return { ...state, userGuess: action.payload };
    case SET_ALL_GUESSES:
      return { ...state, allGuesses: action.payload };
    case RESTART_THE_GAME:
      return { ...state, isGameFinished: action.payload };
  }
  return state;
}
