import * as React from "react";
import service from "../service";

import * as actions from "../../actions";
import { StoreState } from "src/types";
import { Dispatch } from "redux";
import { connect } from "react-redux";

type mapProps = ReturnType<typeof mapStateToProps>;
type mapDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = mapProps & mapDispatch;

class Input extends React.Component<Props> {
  getUserGuess = (event: any) => {
    if (/^\d+$/.test(event.target.value) && event.target.value.length < 5) {
      this.props.getUserGuess(event.target.value);
    }
  };

  calculateCnB = () => {
    const {
      numbers,
      userGuess,
      restartTheGame,
      setAllGuesses,
      allGuesses
    } = this.props;
    const checker = service.calculateCnB(numbers, userGuess);
    const allGuessesCopy: any = allGuesses;
    const data = {
      guess: userGuess,
      checker
    };
    if (checker.bulls === 4) {
      restartTheGame(true);
    }
    if (data) {
      allGuesses.push(data);
      setAllGuesses(allGuessesCopy);
    }
  };

  handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      if (this.props.userGuess) {
        if (this.props.userGuess.length === 4) {
          this.calculateCnB();
          event.target.value = "";
          this.props.getUserGuess(event.target.value);
        }
      }
    }
  };

  render() {
    return (
      <div className="number-input-wrapper">
        <input
          onChange={this.getUserGuess}
          min={4}
          max={4}
          pattern="[0-9]{4}"
          type="text"
          value={this.props.numberInputValue}
          onKeyPress={this.handleKeyPress}
          disabled={this.props.isGameFinished}
        />
        <ul>
          {this.props.allGuesses.map((g: any, i: number) => {
            return (
              <li key={g.guess}>
                Try #{i + 1} - NUMBER -
                {g.guess.map((n: number) => {
                  return n;
                })}
                <img src="bull.png" alt="BULL" />
                {g.checker.bulls} <img src="cow.png" alt="COW" />
                {g.checker.cows}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({
  numbers,
  userGuess,
  allGuesses,
  isGameFinished,
  numberInputValue
}: StoreState) {
  return { numbers, userGuess, allGuesses, isGameFinished, numberInputValue };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    restartTheGame: (condition: boolean) =>
      dispatch(actions.restartTheGame(condition)),
    saveTheUser: () => dispatch(actions.saveTheUser()),
    setAllGuesses: (guesses: []) => dispatch(actions.setAllGuesses(guesses)),
    getUserGuess: (guess: number) => dispatch(actions.getUserGuess(guess)),
    setErrorMessage: (msg: string) => dispatch(actions.setErrorMessage(msg))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
