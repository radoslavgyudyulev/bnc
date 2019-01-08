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
      <div>
        <input
          className="number-input-wrapper"
          type="text"
          onChange={this.getUserGuess}
          min={4}
          max={4}
          pattern="[0-9]{4}"
          value={this.props.numberInputValue}
          onKeyPress={this.handleKeyPress}
          disabled={this.props.isGameFinished}
        />
        <div className="results-wrapper">
          <ul>
            {this.props.allGuesses.length > 0 ? (
              this.props.allGuesses.map((g: any, i: number) => {
                return (
                  <li key={g.guess}>
                    <strong className="index">{i + 1}</strong>{" "}
                    <strong className="numbers">
                      {g.guess.map((n: number) => {
                        return n;
                      })}
                    </strong>
                    <img src="bull.png" alt="BULL" />
                    <strong className="count">{g.checker.bulls}</strong>
                    <img src="cow.png" alt="COW" />
                    <strong className="count">{g.checker.cows}</strong>
                  </li>
                );
              })
            ) : (
              <li>
                <strong className="numbers">
                  Hey {localStorage.getItem("user")} try to guess the number
                </strong>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({
  numbers,
  userGuess,
  allGuesses,
  isGameFinished,
  numberInputValue,
  username
}: StoreState) {
  return {
    numbers,
    userGuess,
    allGuesses,
    isGameFinished,
    numberInputValue,
    username
  };
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
