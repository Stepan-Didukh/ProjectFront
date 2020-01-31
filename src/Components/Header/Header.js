import React from "react";
import {Link} from "react-router-dom";
import './Header.css'
import {Logo} from "../Logo/Logo";

export const Header =(props)=>{
const HR ='Components-header';

const {className=''}=props;

    return(
        <header className={`${HR} ${className}`}>

            <Logo/>
            <Link className={`${HR}_link`} to={'/login'} >Sign in</Link>
            <Link className={`${HR}_link`} to={'/register'} >Sign up</Link>
        </header>
    )
}