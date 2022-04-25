import React, { useContext } from 'react'
import { AppSettings } from '../config/AppSettings'

const ModalAlert = () => {
  const { handleDeleteUser } = useContext(AppSettings)
  return (
    <div className="modal fade" id="eraseAlert" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-body">
            <h1><i className='fa fa-warning text-warning'></i></h1>
            <h5>The user will be deleted.</h5>
            ...Are you sure? you can't undo this action.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal"><i className='fa fa-times'></i> Close</button>
            <button onClick={handleDeleteUser} type="button" className="btn btn-primary" data-bs-dismiss="modal"><i className='fa fa-check'></i> Understood</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ModalAlert }