import React from 'react'

const UserContent = (props) => {
  return (
    <div className='content-fluid'>
      <div className='d-inline-flex flex-wrap align-items-stretch'>
        {props.children}
      </div>
    </div>
  )
}

export { UserContent }