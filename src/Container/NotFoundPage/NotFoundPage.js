import React from 'react';
import NotFoundImg from '../../assets/not-found.png';
import {Button} from "../../Components/Button/Button";
import './NotFoundPage.css';


const CN = "not-found-page";

const NotFoundPage = (props) => {

    const onGoHomeClick = () => {
        const { history } = props;
        history.push('/');
    };

    return (
        <div className={CN}>
            <img className={'NotFound'} alt="not-found" src={NotFoundImg}/>
            <Button onClick={onGoHomeClick} label="Go Home" className={`${CN}__btn`}/>
        </div>
    );
};

export default NotFoundPage;