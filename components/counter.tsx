import React, { Component } from "react"
import { Store } from "redux"
import { connect } from "react-redux"
import { CountState } from "../stores/count/constants"
import { increment, decrement, reset } from "../stores/count/actions"
import { ComponentProps } from "../stores"

type IProps = Store & {
  count: CountState,
}

class Counter extends Component<IProps & Store> {
  increment = () => {
    this.props.dispatch(increment())
  }

  decrement = () => {
    this.props.dispatch(decrement())
  }

  reset = () => {
    this.props.dispatch(reset())
  }

  render() {
    const { value } = this.props.count
    return (
      <div>
        <h1>
          Count: <span>{value}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default connect((state: ComponentProps) => state)(Counter)
