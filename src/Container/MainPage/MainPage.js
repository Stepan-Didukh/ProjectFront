import React, {Component} from "react";
import './MainPage.css'
import {Link} from "react-router-dom";
import {Logo} from "../../Components/Logo/Logo";
class MainPage extends Component {



    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className={'headerUser'}>
                    <Logo/>
                    <Link className="nav-link" to={'/support'}>Support</Link>
                    <Link onClick={this.logOut.bind(this)} className="nav-link" to={''}>Logout</Link>

                </div>
                <div>
                </div>
            </div>

        )
    }

}

export default MainPage;
