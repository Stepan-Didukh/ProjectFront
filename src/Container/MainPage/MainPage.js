import React, {Component} from "react";
import './MainPage.css'
import {Link} from "react-router-dom";
import {Logo} from "../../Components/Logo/Logo";
import Chat from "../../Components/Chat/Chat";
import Store from "../../Reducers/ChatStore/ChatStore";
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
                    <Link onClick={this.logOut.bind(this)} className="nav-link" to={''}>Logout</Link>

                </div>

                <main>
                    <Store>
                    <Chat/>
                    </Store>
                </main>
            </div>

        )
    }

}

export default MainPage;
