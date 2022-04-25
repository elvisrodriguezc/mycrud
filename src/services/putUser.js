import Axios from 'axios'

const putUser = async (user, id) => {
  const requestOptions = {
    url: 'https://users-crud1.herokuapp.com/users/' + id + '/',
    method: 'PUT',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      "X-CSRFToken": "lUymOf7kHgtwHh4tdC5vDy8oUO9WWXEzbbfVC2dcK7RHiPlDN5WYjh3U3v9XrpmI"
    },
    data: JSON.stringify(user)
  }
  const response = await Axios(requestOptions)
  return response
}
export { putUser } // export the function