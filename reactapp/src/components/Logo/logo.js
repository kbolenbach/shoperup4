import './styles.scss';
import React from 'react';
import logo from '../Logo/cat.png';
import { NavLink } from "react-router-dom";


export const Logo = ({href}) => {
    return (

        <NavLink className="logo" to={href} ><img src={logo} alt="logo" /></NavLink >
       
    )
}