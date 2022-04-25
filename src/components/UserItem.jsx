import React from 'react'
import "./UserItem.css"

const UserItem = (props) => {
  return (
    <div className="card animation">
      <div className="row">
        <div className="col-md-3">
          <span><i className='icon fa fa-user-circle fa-xl'></i></span>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title text-truncate">{props.user.first_name} {props.user.last_name}</h5>
            <a href='mailto:f@gmail.com' className="card-text text-truncate"><i className='fa fa-envelope'></i> {props.user.email}</a>
            <p className="card-text"><i className='fa fa-cake'></i> {props.user.birthday}</p>
          </div>
        </div>
        <div className='col-md-3'>
          <div className="d-flex flex-row justify-content-around mt-2">
            <div>
              <button className='action' onClick={props.updateUser} title='edit'><i className='fa fa-pencil fa-xl text-success'></i> </button>
            </div>
            <div>
              <button onClick={props.eraseUser} title="erase" data-bs-toggle="modal" data-bs-target="#eraseAlert"><i className='fa fa-trash fa-xl text-danger'></i> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { UserItem }