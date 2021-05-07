import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div><NavLink to={'/'}>Home</NavLink></div>
            <div><NavLink to={'/employees'}>Employees</NavLink></div>
        </div>
    )
}

export default Navbar;
