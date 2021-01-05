import React, {useState} from 'react';
import './App.css';
import {UserTable} from './UserTable';
import {AddUserForm} from './AddUserForm';
import {EditUserForm} from './EditUserForm';

function App() {
  const usersData = []
  const [users, setUsers] = useState(usersData); // this could have been defaulted with a blank array too, but variable is used later on again.
  const [currentEditingUser, setCurrentEditingUser] = useState({})
  const [editing, setEditing] = useState(false);

  const addUser = (user) => { // the variable in bracker here represents the object that "AddUserForm" returned
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => {
      return user.id !== id;
    }));
    setEditing(false);
  }

  const editUser = (id) => {
    const user = users.filter((user) => {
      return user.id === id;
    })
    setCurrentEditingUser(user[0]);
    setEditing(true);
  }

  const submitEditUser = (passedUser) => {
    setUsers(users.map((user) => {
      return user.id === passedUser.id ? passedUser : user;
    }))
  }
  
  return (
    <div className="App">
      <h2>Add User</h2>
      {editing ? 
      <EditUserForm currentEditingUser={currentEditingUser} submitEditUser={submitEditUser} setEditing={setEditing}/>
      : <AddUserForm addUser={addUser} />
      }
      <UserTable users={users} deleteUser={deleteUser} editUser={editUser}/>

    </div>
  );
}

export default App;
