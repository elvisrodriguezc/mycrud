import Axios from 'axios'

const getAllUsers = async () => {
  const requestOptions = {
    url: 'https://users-crud1.herokuapp.com/users/',
    method: 'GET'
  }

  const response = await Axios(requestOptions)
  return response.data
}

export { getAllUsers } // export the function