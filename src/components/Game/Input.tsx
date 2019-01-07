import * as React from "react";
import service from "../service";

import * as actions from "../../actions";
import { StoreState } from "src/types";
import { Dispatch } from "redux";
import { connect } from "react-redux";

type mapProps = ReturnType<typeof mapStateToProps>;
type mapDispatch = ReturnType<typeof mapDispatchToProps>;

export type Props = mapProps & mapDispatch;

class Input extends React.Component<Props> {
  getUserGuess = (event: any) => {
    this.props.getUserGuess(event.target.value);
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
    const allGuessesCopy = allGuesses;
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
      this.calculateCnB();
      event.target.value = "";
      this.props.getUserGuess(event.target.value);
    }
  };

  render() {
    return (
      <input
        onChange={this.getUserGuess}
        min={4}
        max={4}
        pattern="[0-9]{4}"
        type="text"
        onKeyPress={this.handleKeyPress}
        disabled={this.props.isGameFinished}
      />
    );
  }
}

function mapStateToProps({
  numbers,
  userGuess,
  allGuesses,
  isGameFinished
}: StoreState) {
  return { numbers, userGuess, allGuesses, isGameFinished };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    restartTheGame: (condition: boolean) =>
      dispatch(actions.restartTheGame(condition)),
    saveTheUser: () => dispatch(actions.saveTheUser()),
    setAllGuesses: (guesses: []) => dispatch(actions.setAllGuesses(guesses)),
    getUserGuess: (guess: number) => dispatch(actions.getUserGuess(guess))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
