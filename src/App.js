import React, {useState} from 'react';
import './App.css';
import {UserTable} from './UserTable';
import {AddUserForm} from './AddUserForm';

function App() {
  const usersData = []
  const [users, setUsers] = useState(usersData);
  
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => {
      return user.id !== id;
    }))
  }
  
  return (
    <div className="App">
      <h2>Add User</h2>
      <AddUserForm addUser={addUser} />

      <UserTable users={users} deleteUser={deleteUser} />

    </div>
  );
}

export default App;
