import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.nav}>
            <div><NavLink to={'/'}>Home</NavLink></div>
            <div><NavLink to={'/employees'}>Employees</NavLink></div>
        </div>
    )
}

export default Navbar;
