import React, {Component} from "react";
import {Link} from "react-router-dom";
import './Header.css'

const queryString = require('query-string');

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
            search: ''
        };
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

    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.pushHomePage.push('/')
    }


    render() {

        const UserName = queryString.parse(this.props.pushHomePage.location.search);


        return (

            <div className={this.state.scroller ? 'scroller Header' : 'Header'}>
                <Link
                    className={'LogoHeader'}
                    to={localStorage.token ? `/User?Name=${UserName.Name}` : `/`}
                >
                    FluDuck
                    <div className={'Logo_lviv'}>
                        -Lviv hotel-
                    </div>
                </Link>


                {
                    localStorage.token ?
                        <div className={'Authentications_Box'}>
                            <Link
                                onClick={this.logOut.bind(this)}
                                className="Authentications_link"
                                to={''}
                            >Logout</Link>
                            <Link
                                to={`/Support?Name=${UserName.Name}`}
                                className="Authentications_link"
                            >
                                Support
                            </Link>
                        </div>
                        :
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
                }
                {
                    this.props.pushHomePage.location.pathname === `/Admin` && localStorage.token ?

                        <div>
                            <Link
                                to={`/Users`}
                                className={'Authentications_link'}
                            >
                                Users
                            </Link>
                        </div> : ''


                }
                {
                    localStorage.token ? <div className={'Welcome'}>Welcome {UserName.Name}!</div> : ''
                }

            </div>

        )
    }
}