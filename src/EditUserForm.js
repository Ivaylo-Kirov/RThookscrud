import React, {useState} from 'react';

function EditUserForm(props) {

    const initialFormState = {id: props.currentEditingUser.id, name: props.currentEditingUser.name};
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    }

    const submitForm = (e) => {
        e.preventDefault();
        props.submitEditUser(user);
        props.setEditing(false);
    }

    return (
        <form>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <button onClick={submitForm}>Edit user</button>
        </form>
    )

}


export {EditUserForm};