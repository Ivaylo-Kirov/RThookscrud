import React from 'react';

function UserTable(props) {

    return (
        <div>
            <ul>
            {props.users.map((user) => {
                return <li key={user.id}>{user.name} | <button onClick={() => props.editUser(user.id)}>Edit</button> | <button onClick={() => props.deleteUser(user.id)}>Delete</button></li>
            })}
            </ul>
        </div>
    )

}

export {UserTable};