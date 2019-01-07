import * as React from "react";
import "./App.css";

import { StoreState } from "./types";
import { Dispatch } from "redux";

import * as actions from "./actions";
import { connect } from "react-redux";

import Game from "./components/Game/Game";

import UsernameSetter from "./components/UsernameSetter";

type mapProps = ReturnType<typeof mapStateToProps>;
type mapDispatch = ReturnType<typeof mapDispatchToProps>;

export type Props = mapProps & mapDispatch;

class App extends React.Component<Props> {
  componentDidMount() {
    this.props.generateRandomNumbers();
  }

  render() {
    return (
      <div className="App">
        {this.props.isUsernameSaved ? <Game /> : <UsernameSetter />}
      </div>
    );
  }
}

function mapStateToProps({ isUsernameSaved }: StoreState) {
  return {
    isUsernameSaved
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getUserGuess: (guess: number) => dispatch(actions.getUserGuess(guess)),
    generateRandomNumbers: () => dispatch(actions.generateRandomNumbers()),
    setAllGuesses: (allGuesses: []) =>
      dispatch(actions.setAllGuesses(allGuesses)),
    restartTheGame: (condition: boolean) =>
      dispatch(actions.restartTheGame(condition))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
