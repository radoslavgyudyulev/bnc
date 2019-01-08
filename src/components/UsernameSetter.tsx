import * as React from "react";
import { Dispatch } from "redux";

import * as actions from "../actions";
import { connect } from "react-redux";

type mapDispatch = ReturnType<typeof mapDispatchToProps>;

export type IProps = mapDispatch;

const UsernameSetter = (props: IProps) => {
  // tslint:disable-next-line: no-console
  // console.log(props);

  return (
    <div className="username-input-wrapper">
      <p>Add your username to start the game</p>
      <input
        onChange={event => props.setUsername(event.target.value)}
        type="text"
        className="username-input"
        placeholder="Username"
      />
      <button
        className="username-input-button"
        onClick={props.saveTheUser}
        type="button"
      >
        Ready
      </button>
    </div>
  );
};

function mapStateToProps({}) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setUsername: (username: string) => dispatch(actions.setUsername(username)),
    saveTheUser: () => dispatch(actions.saveTheUser())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsernameSetter);
