import React, {useState, useEffect} from 'react';

function EditUserForm(props) {
    const [user, setUser] = useState(props.currentEditingUser);

    useEffect(() => {
        setUser(props.currentEditingUser)
    }, [props])

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