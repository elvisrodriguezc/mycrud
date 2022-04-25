import { useEffect, useState } from "react";
import { getAllUsers } from "../services/getAllUsers";
import { postNewUser } from "../services/postNewUser";
import { deleteUser } from "../services/deleteUser";
import { putUser } from "../services/putUser";
const useInitialState = () => {
  const [users, setUsers] = useState([]);
  const [curUser, setCurUser] = useState({
    id: 0,
    isEditing: false,
    isDeleting: false,
    userData: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: ""
    }
  });
  const [message, setMessage] = useState({})

  useEffect(() => {
    getAllUsers()
      .then(response => {
        setUsers(response);
      })
      .catch(error => { console.log(error); });
  }, [])

  const handleUploadUser = (user) => {
    if (curUser.isEditing) {
      putUser(user, curUser.userData.id)
        .then(response => {
          const arrUsers = users
          const indexUploaded = arrUsers.findIndex(u => u.id === curUser.userData.id);
          arrUsers[indexUploaded] = response.data;
          setUsers(arrUsers);
          handleCurUserInitialize()
          setMessage({ title: "User updated successfully", message: "Status: " + response.status + " " + response.statusText, active: true })
        })
        .catch(error => {
          console.log(error.response);
          handleCurUserInitialize()
        });
    } else {
      postNewUser(user)
        .then((response) => {
          setUsers([...users, response.data]);
          setMessage({ title: "User created successfully", message: "Status: " + response.status + " " + response.statusText, active: true })
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
            alert(error.response.status + ': ' + error.response.data.email[0]);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        })
    }
  }

  const handleCurUser = (id, mode) => {
    handleCurUserInitialize()
    setCurUser((prevState) => ({
      ...prevState, id: id, isEditing: mode === 'update' ? true : false, isDeleting: mode === 'erase' ? true : false, userData: users.find(user => user.id === id)
    }));
  }
  // We need to place the Editing Value when change if its require
  const handleCurUserInitialize = () => {
    setCurUser({ id: 0, isEditing: false, isDeleting: false, userData: { email: "", password: "", first_name: "", last_name: "", birthday: "" } });
  }
  const handleDeleteUser = () => {
    setUsers(users.filter(user => user.id !== curUser.id));
    deleteUser(curUser.id)
      .then((response) => {
        handleCurUserInitialize()
        setMessage({ title: "User deleted successfully. ", message: "Status: " + response, active: true })
      })
      .catch(error => {
        console.log(error)
        handleCurUserInitialize()
      })
  }
  useEffect(() => {
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
    if (message.active) {
      delay(10000).then(() => {
        setMessage({ message: "", active: false })
      });
    }
  }, [message])

  return {
    users,
    handleDeleteUser,
    handleUploadUser,
    handleCurUser,
    curUser,
    handleCurUserInitialize,
    message
  }
}

export { useInitialState };

