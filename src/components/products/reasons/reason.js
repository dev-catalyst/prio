import React from "react"

function Reason(props) {
  return (
    <div className="reason">
      <h1>{props.count}</h1>
      <div>
        <h4>{props.header}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Reason
