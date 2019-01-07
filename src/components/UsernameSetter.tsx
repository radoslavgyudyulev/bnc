import * as React from "react";
import { Dispatch } from "redux";

import * as actions from "../actions";
import { connect } from "react-redux";


type mapDispatch = ReturnType<typeof mapDispatchToProps>;

export type IIProps = mapDispatch;

const UsernameSetter = (props: IIProps) => {
  // tslint:disable-next-line: no-console
  // console.log(props);
  return (
    <div>
      <input
        onChange={event => props.setUsername(event.target.value)}
        type="text"
      />
      <button onClick={props.saveTheUser} type="button">
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
