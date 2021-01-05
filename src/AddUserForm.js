import React, {useState} from 'react';

function AddUserForm(props) {

    const initialFormState = {id: null, name: ''};
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    }

    const submitForm = (e) => {
        e.preventDefault();
        props.addUser(user); // this is what calls the "parent" addUser function with the local "user" variable
        setUser(initialFormState);
    }

    return (
        <form>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <button onClick={submitForm}>Add new user</button>
        </form>
    )

}


export {AddUserForm};