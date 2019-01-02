import React, { Component } from "react"

const initialState = { clicksCount: 0 }
type State = Readonly<typeof initialState>

class ButtonCounter extends Component<object, State> {
    readonly state: State = initialState
    dobadThing() {
        // this.state = { clicksCount: 12 }
        // this.state.clicksCount = 34
    }
    render() {
        const { clicksCount } = this.state
        return (
            <>
                <button onClick={this.handleIncerement}>Increment</button>
                <button onClick={this.handleDecerement}>Decrement</button>
                You are clicked {clicksCount} times!
            </>
        )
    }

    private handleIncerement = () => this.setState(incrementClicksCount)
    private handleDecerement = () => this.setState(decrementClicksCount)
}

const incrementClicksCount = (prevState: State) => ({ clicksCount: prevState.clicksCount + 1})
const decrementClicksCount = (prevState: State) => ({ clicksCount: prevState.clicksCount - 1})

export default ButtonCounter

// reference https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935
// Will throw following complile error:
// [ts]
// Cannot assign to 'clicksCount' because it is a constant or a read-only property.
