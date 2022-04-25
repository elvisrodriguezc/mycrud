import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AppSettings } from '../config/AppSettings'

const UserForm = () => {
  const { handleUploadUser, curUser, handleCurUserInitialize } = useContext(AppSettings)
  const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => {
    handleUploadUser(data)
    handleCurUserInitialize()
  }
  useEffect(() => {
    if (!curUser.isDeleting) {
      setValue('email', curUser.userData.email)
      setValue('password', curUser.userData.password)
      setValue('first_name', curUser.userData.first_name)
      setValue('last_name', curUser.userData.last_name)
      setValue('birthday', curUser.userData.birthday)
    }
  }, [curUser])

  // console.log(watch('email'))
  return (
    <div className="col-md-3">
      <div className='card' style={{ width: "21rem" }}>
        <div className='card-body'>
          {curUser.isEditing
            ? <h3><i className='fa fa-user-circle-o'></i> Update User <span className='badge bg-primary' style={{ fontSize: "8px" }}>{curUser.userData.id}</span></h3>
            : <h3><i className='fa fa-user-circle-o'></i> New User</h3>
          }
          <hr />
          <div className='userform'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-floating mb-3">
                <input type="mail" name="email" id="email" autoComplete='off' {...register("email", { required: true })} className="form-control" placeholder='Email' />
                <label htmlFor='email' className='form-label'> Email: </label>
              </div>

              <div className="form-floating mb-3">
                <input type="password" name="password" id="password" autoComplete='off' {...register("password", { required: true, maxLength: 10 })} className="form-control" placeholder='password' />
                <label htmlFor='password' className='form-label'> Password: </label>
              </div>

              <div className="form-floating mb-3">
                <input defaultValue="" type="first_name" name="first_name" id="first_name" autoComplete='off' {...register("first_name", { required: true })} className="form-control" placeholder='First Name' />
                <label htmlFor='first_name' className='form-label'> First Name: </label>
              </div>

              <div className="form-floating mb-3">
                <input defaultValue="" type="last_name" name="last_name" id="last_name" autoComplete='off' {...register("last_name", { required: true })} className="form-control" placeholder='Last Name' />
                <label htmlFor='last_name' className='form-label'> Last Name: </label>
              </div>

              <div className="form-floating mb-3">
                <input defaultValue="" type="birthday" name="birthday" id="birthday" autoComplete='off' {...register("birthday", { required: true })} className="form-control" placeholder='Birthday' />
                <label htmlFor='birthday' className='form-label'> Birthday: </label>
              </div>

              <div className="contaimer flex">
                <button type="submit" className="btn btn-outline-primary"> <i className='fa fa-save'></i> Upload </button>
                <button type="reset" className="btn btn-outline-secondary" onClick={handleCurUserInitialize}> <i className='fa fa-refresh'> </i> Clear </button>
              </div>
            </form>
          </div>
        </div>
        <div className='card-footer'>
          <div className='vstack gap-2'>
            <span className='text-danger'>{errors.email && errors.email.message}</span>
            <span className='text-danger'>{errors.password && errors.password.message}</span>
            <span className='text-danger'>{errors.first_name && errors.first_name.message}</span>
            <span className='text-danger'>{errors.last_name && errors.last_name.message}</span>
            <span className='text-danger'>{errors.birthday && errors.birthday.message}</span>
          </div>
        </div>

      </div>
    </div>

  )
}

export { UserForm }