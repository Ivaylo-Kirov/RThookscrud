import React, {useState} from 'react';

function AddUserForm(props) {

    const initialFormState = {id: null, name: ''};
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event) => { // this is the standard input field function that can be copy/pasted in other projects
        const {name, value} = event.target;
        setUser({...user, [name]: value}) // dynamic property assignment - result is that first we spread through the object, then whichever value was changed in the event would be updated in the state. Another line that is essentially copy/paste for any project.
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