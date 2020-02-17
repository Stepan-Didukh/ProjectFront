import React, {Component} from "react";
import {Link} from "react-router-dom";
import './Header.css'
import CallIcon from '@material-ui/icons/Call';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrolled: false
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 10;
            if (isTop !== true) {
                this.setState({scroller: true});
            } else {
                this.setState({scroller: false});
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => {
        });
    }

    render() {
        return (
            <div className={this.state.scroller ? 'scroller Header' : 'Header'}>
                <Link
                    className={'LogoHeader'}
                    to={'/'}
                >
                    FluDuck
                    <div className={'Logo_lviv'}>
                        -Lviv hotel-
                    </div>
                </Link>

                <div className={'Authentications_Box'}>
                    <Link
                        className={`Authentications_link`}
                        to={'/login'}
                    >
                        Sign in</Link>

                    <Link
                        className={`Authentications_link`}
                        to={'/register'}
                    >Sign up</Link>

                </div>

                <div className={'Contact'}>
                    <CallIcon/>

                    <div className={'Phone_Number'}>
                        +380681001538
                    </div>
                </div>

            </div>
        )
    }
}