import React from "react";
import s from './users.module.css'
import * as axios from 'axios';

class Users extends React.Component {

    componentDidMount() {

        axios.get(`https://reqres.in/api/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                debugger;
                this.props.setUsers(response.data.data);
                this.props.setTotalUsersCount(response.data.total);
            });

    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://reqres.in/api/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                debugger;
                this.props.setUsers(response.data.data);
            });

    }


    render() {

        debugger;
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)

        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}
                    onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                })}

            </div>
            <h1>Employees</h1>
            {
                this.props.users.map(u => <div key={u.id}>
                <span className='user'>
                    <div className='user'>
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

}

export default Users;