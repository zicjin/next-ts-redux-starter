import classNames from "classnames/bind"
import React, { SFC } from "react"
import { connect } from "react-redux"
import { ClockState } from "../../stores/clock/constants"
import css from "./clock.css"

const cx = classNames.bind(css)

const pad = (n) => (n < 10 ? `0${n}` : n)

const format = (t) => {
  const hours = t.getUTCHours()
  const minutes = t.getUTCMinutes()
  const seconds = t.getUTCSeconds()
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

interface IProps {
  clock: ClockState
}

const Clock: SFC<IProps> = ({ clock }) => (
  <>
    <h2>Clock:</h2>
    <div className={cx("clock", { light: clock.light })}>
      {format(new Date(clock.lastUpdate || Date.now()))}
    </div>
  </>
)

export default connect((state) => state)(Clock)
