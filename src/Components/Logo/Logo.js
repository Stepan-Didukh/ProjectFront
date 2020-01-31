import {Link} from "react-router-dom";
import React from "react";
import '../Header/Header.css'

export const Logo = (props) => {

    const HR ='Components-header';
    const {className} = props;

    return (
        <div className={'Logo_box'}>
            <div className={'display-flex'}>
                <div className={'Logo_photo'}/>
                <Link className={`${HR}_Logo ${className}`} to={'/'}>FluDukh</Link>
            </div>
            <div className={`Small_logo ${className}`}>Corporation of hotels</div>
        </div>
    )
}