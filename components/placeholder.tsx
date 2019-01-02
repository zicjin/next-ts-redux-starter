import React, { SFC } from "react"
import { connect } from "react-redux"
import { PlaceholderState } from "../stores/placeholder/constants"

interface IProps {
  placeholder: PlaceholderState
}

const Placeholder: SFC<IProps> = ({ placeholder }) => (
  <React.Fragment>
    <h2>JSON:</h2>
    {placeholder.data && (
      <pre>
        <code>{JSON.stringify(placeholder.data, null, 2)}</code>
      </pre>
    )}
    {placeholder.error && (
      <p style={{ color: "red" }}>Error: {placeholder.error}</p>
    )}
  </React.Fragment>
)

export default connect((state) => state)(Placeholder)
