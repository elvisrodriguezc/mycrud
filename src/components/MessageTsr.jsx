import React from 'react'

const MessageTsr = (props) => {

  return (
    <div className="alert alert-light" role="alert">
      <h5>{props.message.title}</h5>
      {props.message.message}
    </div>
  )
}

export { MessageTsr }