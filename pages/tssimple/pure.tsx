import { PureComponent, ReactNode } from "react"

interface IProps {
    label: string;
}

interface IState {
  readonly count: number
}

export default class StatefulCounter extends PureComponent<IProps, IState> {
  state = {
    count: 0
  }

  readonly handleIncrement = () => {
      this.setState((prevState) => ({
          count: prevState.count + 1
      } as IState))
  }

  render(): ReactNode {
    return (
      <div>
        <span>{this.props.label}: {this.state.count} </span>
        <button type="button" onClick={this.handleIncrement}>
           {`Increment`}
        </button>
      </div>
     );
  }
}
