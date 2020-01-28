import React from "react";
import {Link} from "react-router-dom";
import './Header.css'

export const Header =(props)=>{
const HR ='Components-header';
const {className=''}=props;
    return(
        <header className={`${HR} ${className}`}>
            <div className={'Logo_box'}>
                <div className={'display-flex'}>
                    <div className={'Logo_photo'}/>
                    <Link className={`${HR}_Logo`} to={'/'}>FluDukh</Link>
                </div>
                <div className={'Small_logo'}>Corporation  of  hotels</div>
            </div>
         
            <Link className={`${HR}_link`} to={'/login'} >Sign in</Link>
            <Link className={`${HR}_link`} to={'/register'} >Sign up</Link>
        </header>
    )
}