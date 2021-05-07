import React from "react";
import s from './users.module.css'

let Users = (props) => {
    return <div>
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