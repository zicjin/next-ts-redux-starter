import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import { loadData } from '../../stores/placeholder/actions'
import * as clockActions from '../../stores/clock/actions'
import { increment } from '../../stores/count/actions'

import Clock from '../../components/clock/clock'
import Counter from '../../components/counter'
import Placeholder from '../../components/placeholder'

class ReduxSimple extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx

    store.dispatch(clockActions.tickClock(isServer))
    store.dispatch(increment())

    if (!store.getState().placeholder.data) {
      store.dispatch(loadData())
    }

    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(clockActions.startClock())
  }

  render() {
    return (
      <>
        <h1>redux-simple</h1>
        <nav>
          <Link href='/index'>
            <a>Navigate to: /index</a>
          </Link>
        </nav>

        <Clock />
        <Counter />
        <Placeholder />
      </>
    )
  }
}

export default connect()(ReduxSimple)
