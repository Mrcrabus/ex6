import React from "react";
import s from './users.module.css'
import * as axios from 'axios';

let Users = (props) => {

    let getUsers = () =>
    {
        if (props.users.length === 0) {
            axios.get("https://reqres.in/api/users")
                .then(response => {
                    debugger;
                    props.setUsers(response.data.data);
                });
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        <h1>Here</h1>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avatar} className={s.photo} alt="..."/>
                    </div>
                    <div>
                        {u.last_name}
                    </div>
                    <div>
                        {u.first_name}
                    </div>
                </span>
            </div>)
        }
    </div>
}

export default Users;