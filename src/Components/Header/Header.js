import React from "react";
import {Link} from "react-router-dom";
import './Header.css'

export const Header =()=>{
const HR ='Components-header';
    return(
        <header className={`${HR}`}>
            <Link className={`${HR}_link`} to={'/'}>logo</Link>
            <Link className={`${HR}_link`} to={'/login'} >Sign in</Link>
            <Link className={`${HR}_link`} to={'/register'} >Sign up</Link>
        </header>
    )
}