import React, {Component} from "react";
import {Header} from "../../Components/Header/Header";
import './HomePage.css'
import CircularProgress from "@material-ui/core/CircularProgress";
import {connect} from "react-redux";
import {Room} from "../../actions/getRoom";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        this.props.fetchData("http://localhost:5000/room/findAll");
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
            <div>
                <Header className={this.state.scroller ? 'scroller header' : 'header'}/>

                <div className='Photo_box'>
                </div>

                <ul>
                    {this.props.rooms ?
                        this.props.rooms.map((room) => {
                            return <li
                                key={room.id}
                                className={'UserCart'}>
                                <div className={'paramUser'}>Price: {room.price}</div>
                                <div className={'paramUser'}>Square: {room.square}</div>
                                <div className={'paramUser'}>Amount: {room.amount}</div>
                            </li>
                        }) : <div className={'loading'}>
                            <CircularProgress/>

                        </div>
                    }
                </ul>
            </div>

        )
    }

}

const mapStateToProps = (store) => {
    console.log(store);
    return {
        rooms: store.HotelReducer.rooms
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => dispatch(Room(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


