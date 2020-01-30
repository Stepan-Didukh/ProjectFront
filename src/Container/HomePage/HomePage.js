import React, {Component} from "react";
import {Header} from "../../Components/Header/Header";
import './HomePage.css'
import {Link} from "react-router-dom";


class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== true) {
                this.setState({scroller: true});
            } else {
                this.setState({scroller: false});
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',()=>{});
    }
    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/');
    }
    render() {
        const userLink = (
            <ul className="navbar-nav">

                <li className="nav-btn">
                    <Link to={`/login`} onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </Link>
                </li>
            </ul>
        );
        return (
            <div>
                <Header className={this.state.scroller ? 'scroller header' : 'header'}/>

                <div className='Photo_box'>
                </div>

                {localStorage.token ? userLink : ''}

            </div>

        )
    }

}

export default HomePage;
