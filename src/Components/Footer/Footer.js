import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Footer.css'
import {Link} from "react-router-dom";

export const Footer = () => {

    return (
        <footer className={'footer'}>
            <div className={'Some_Info'}>
                © 2019–2020, Premier Hotels and Resorts.<Link to={''}>Политика конфиденциальности.</Link>
            </div>
            <div className={'contact_info'}>
                Смотри, обсуждай, делись!
                <InstagramIcon/>
                <FacebookIcon/>
                <TelegramIcon/>
                <YouTubeIcon/>
                <TwitterIcon/>
            </div>
        </footer>
    )

};



