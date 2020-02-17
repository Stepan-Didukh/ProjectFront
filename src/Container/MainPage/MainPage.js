import React, {Component} from "react";
import './MainPage.css'
import {Link} from "react-router-dom";
import Chat from "../../Components/Chat/Chat";
import Store from "../../Reducers/ChatStore/ChatStore";

const queryString = require('query-string');

class MainPage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/');
    }

    render() {
        const parsed = queryString.parse(this.props.location.search);
        console.log(parsed);
        return (
            <div>
                <div className={'headerUser'}>

                    <Link onClick={this.logOut.bind(this)} className="nav-link" to={''}>Logout</Link>

                </div>

                <main>
                    <div className={'display-flex'}>
                        <div className={'context_box'}>

                        </div>
                        <Store>
                            <Chat
                                parsed={parsed}/>
                        </Store>
                    </div>

                </main>
            </div>

        )
    }

}

export default MainPage;
