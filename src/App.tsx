import * as React from "react";
import "./styles/css/App.css";

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
        {localStorage.getItem("user") ? (
          <Game />
        ) : this.props.isUsernameSaved ? (
          <Game />
        ) : (
          <UsernameSetter />
        )}
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
    generateRandomNumbers: () => dispatch(actions.generateRandomNumbers())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
