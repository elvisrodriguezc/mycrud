import Axios from 'axios'

const deleteUser = async (id) => {
  const requestOptions = {
    url: 'https://users-crud1.herokuapp.com/users/' + id + '/',
    method: 'DELETE'
  }
  const response = await Axios(requestOptions)
  return response.status
}

export { deleteUser } // export the function