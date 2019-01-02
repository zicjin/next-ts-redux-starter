import React, { Component } from "react"
import { connect } from "react-redux"
import { Store } from "redux"
import { ComponentProps } from "../stores"
import Link from 'next/link'
import styles from "./index.css"

class Index extends Component<Store> {
  static async getInitialProps(props) {
    // const { store, isServer } = props.ctx
    // store.dispatch(tomain())
    return { isServer: props.ctx.isServer }
  }

  render() {
    return <div id={styles.app}>
      <Link href='/simple/next-simple'>
        <a>Navigate to: /simple/next-simple</a>
      </Link><br />
      <Link href='/simple/antd-simple'>
        <a>Navigate to: /simple/antd-simple</a>
      </Link><br />
      <Link href='/simple/redux-simple'>
        <a>Navigate to: /simple/redux-simple</a>
      </Link><br />
      <Link href='/tssimple/antd-simple'>
        <a>Navigate to: /tssimple/antd-simple</a>
      </Link>
    </div>
  }
}

export default connect((state: ComponentProps) => state)(Index)
