import React, {Component} from "react";
import './UserPage.css'
import {Link} from "react-router-dom";
import {Logo} from "../../Components/Logo/Logo";


class UserPage extends Component {
    constructor() {
        super();
    }

    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/');
    }

    render() {
        const userLink = (
            <div>
                <Link to={`/login`} onClick={this.logOut.bind(this)} className="nav-link">
                    Logout
                </Link>
            </div>
        );

        const logout = localStorage.token ? userLink : '';

        return (
            <div className={'headerUser'}>
                <Logo/>
                {logout}
            </div>
        )
    }

}

export default UserPage;
