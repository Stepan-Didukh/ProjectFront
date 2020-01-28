import React, {Component} from "react";
import {Header} from "../../Components/Header/Header";
import './HomePage.css'


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

    render() {
        return (
            <div>
                <Header className={this.state.scroller ? 'scroller header' : 'header'}/>
                <div className='Photo_box'>
                </div>
            </div>

        )
    }

}

export default HomePage;
