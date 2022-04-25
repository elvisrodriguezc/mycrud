import React, { useContext } from 'react'
import { MessageTsr } from './components/MessageTsr';
import { ModalAlert } from './components/ModalAlert';
import { Pagination } from './components/Pagination';
import { TopBar } from './components/TopBar';
import { UserContent } from './components/UserContent';
import { UserForm } from './components/UserForm';
import { UserItem } from './components/UserItem';
import { AppSettings } from './config/AppSettings';

const AppUI = () => {
  const { users, handleCurUser, message } = useContext(AppSettings);
  return (
    <div className="bg-image container-fluid px-2 min-vh-90 d-flex flex-column ">
      <TopBar></TopBar>
      <div className="row flex-grow-1">
        <UserForm />
        <div className="col-md-9 ">
          <UserContent >
            {users.map((user, index) => (
              <UserItem
                key={index}
                user={user}
                eraseUser={() => handleCurUser(user.id, 'erase')}
                updateUser={() => handleCurUser(user.id, 'update')}
              ></UserItem>
            ))}
          </UserContent>
          <Pagination />
          {message.active
            ? <MessageTsr message={message} />
            : ""
          }
        </div>
      </div>
      <ModalAlert />
    </div>
  )
}

export { AppUI }