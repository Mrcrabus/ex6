import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {setUsersAC} from "../../redux/usersReducers";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users);