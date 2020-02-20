import React from 'react';
import NotFoundImg from '../../assets/not-found.png';
import {Button} from "../../Components/Button/Button";
import './NotFoundPage.css';


const CN = "not-found-page";

const NotFoundPage = (props) => {

    const onGoHomeClick = () => {
        const { history } = props;

        history.goBack();
    };

    return (
        <div className={CN}>
            <img className={'NotFound'} alt="not-found" src={NotFoundImg}/>
            <Button onClick={onGoHomeClick} label="Go Back" className={`${CN}__btn`}/>
        </div>
    );
};

export default NotFoundPage;