import React, {Component} from "react";
import {connect} from "react-redux";
import {Logo} from "../Logo/Logo";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Room} from "../../actions/getRoom";


class RoomList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchData("http://localhost:5000/room/findAll");
    }

    render() {

        return (
            <div className={'listUser'}>
                <div className={'header-user'}>
                    <Logo/>
                    <div className={'All_Users'}>All Room!</div>

                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.props.history.goBack}
                    >goBack</Button>

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
                            <CircularProgress />
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

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);