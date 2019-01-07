import * as React from "react";

import { StoreState } from "src/types";
import { Dispatch } from "redux";
import { connect } from "react-redux";

type mapProps = ReturnType<typeof mapStateToProps>;
type mapDispatch = ReturnType<typeof mapDispatchToProps>;

export type Props = mapProps & mapDispatch;

class Guesses extends React.Component<Props> {

  render() {
    // tslint:disable-next-line: no-console
    return (
      <div>
        <ul>
          {this.props.allGuesses.map((g: any) => {
           
            return (
            <li key={g.guess}>
              {g.guess.map((n: number) => {
                return n;
              })}  //  
              BULLS-{g.checker.bulls}  //  COWS-{g.checker.cows} 
            </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ allGuesses }: StoreState) {
  return { allGuesses };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Guesses);
