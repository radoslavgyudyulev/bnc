import * as React from "react";

import * as actions from "../../actions";
import { StoreState } from "src/types";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import service from "../service";

type mapProps = ReturnType<typeof mapStateToProps>;
type mapDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = mapProps & mapDispatch;

class Input extends React.Component<Props> {
  restartGame = () => {
    this.props.restartTheGame(false);
    this.props.setAllGuesses([]);
    this.props.generateRandomNumbers();
    const record = {
      user: localStorage.getItem("user") || this.props.username,
      number: this.props.numbers,
      tries: this.props.allGuesses.length
    };
    service.saveTheRecordToLS(JSON.stringify(record));
  };
  render() {
    return (
      <div>
        {this.props.isGameFinished ? (
          <div>
            <p>You won</p>
            <button onClick={this.restartGame}>RESTART THE GAME</button>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps({
  isGameFinished,
  username,
  numbers,
  allGuesses
}: StoreState) {
  return { isGameFinished, username, numbers, allGuesses };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    restartTheGame: (condition: boolean) =>
      dispatch(actions.restartTheGame(condition)),
    generateRandomNumbers: () => dispatch(actions.generateRandomNumbers()),
    setAllGuesses: (guesses: []) => dispatch(actions.setAllGuesses(guesses))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
