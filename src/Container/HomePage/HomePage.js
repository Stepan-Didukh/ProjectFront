import React, {Component} from "react";
import Header from "../../Components/Header/Header";
import CircularProgress from "@material-ui/core/CircularProgress";
import HotelIcon from '@material-ui/icons/Hotel';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import {Footer} from "../../Components/Footer/Footer";
import {connect} from "react-redux";
import {Room} from "../../actions/getRoom";
import Photo from '../../assets/westindtla.jpg'
import './HomePage.css'
import axios from "axios";

class HomePage extends Component {
    constructor(props) {
        super(props);
        console.log(props);

    }

    componentDidMount() {
        this.props.fetchData("http://localhost:5000/room/findAll");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.rooms !== 0) {
            return true
        }
    }

    deleteRoom = id => {
        return axios
            .delete(`http://localhost:5000/room/${id}`)
            .catch(err => {
                console.error(err);
            });
    };


    render() {

        const pushHomePage = this.props.history;

        const Rooms = this.props.rooms;

        return (
            <div>
                <Header pushHomePage={pushHomePage}/>

                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                    className={'Photo_Box'}
                    src={Photo}
                    alt="Photo"
                />


                <div className={'ListRoom_Home_Page'}>

                    {Rooms ?
                        Rooms.map((room) => {
                            return <li
                                key={room.id}
                                className={'RoomCart'}>
                                <div className={'Room-Photo'}>
                                    {/*Тут має бути фотка кімнати!*/}
                                </div>
                                <div className={'Main_info_Room'}>
                                    <div className={'Name-Room'}>{room.nameRoom}</div>
                                    <div className={'Param_Room'}>Площа: {room.square} ( м2 ) {10.764 * room.square} (
                                        фут2 )
                                    </div>
                                    <div className={'display-flex'}>
                                        <HotelIcon/>
                                        <div className={'Param_Room'}> {room.amount}</div>
                                        <LocalParkingIcon className={'margin'}/>
                                        <div className={'Param_Room'}> {room.park}</div>
                                    </div>
                                    <div className={'About_Room'}>
                                        {room.about}
                                    </div>
                                    <div className={'Some_Options'}>
                                        <div className={'display-flex'}>
                                            <CheckCircleOutlineIcon/>
                                            <div className={'Param_Room'}>Free Wifi</div>
                                        </div>
                                        <div className={'display-flex'}>
                                            <CheckCircleOutlineIcon/>
                                            <div className={'Param_Room'}>TV</div>
                                        </div>
                                        <div className={'display-flex'}>
                                            <CheckCircleOutlineIcon/>
                                            <div className={'Param_Room'}>Mini Bar</div>
                                        </div>

                                    </div>

                                </div>
                                <div>
                                    <div className={'Price-Box'}>
                                        24h from: <div className={'Price_Room'}>{room.price} UAH
                                    </div>

                                    </div>
                                    {
                                        localStorage.token ?
                                            <div className={'Control_Btn Reserve'}>
                                                Reserve
                                            </div> : ""
                                    }
                                    {
                                        this.props.location.pathname === `/Admin` && localStorage.token ?

                                            <div className={'Control_Room'}>
                                                <div
                                                    className={`Control_Btn Delete`}
                                                    onClick={() => {
                                                        this.deleteRoom(room.id).then(() => {
                                                        })
                                                    }}
                                                >
                                                    Delete {room.id}
                                                </div>
                                                <div

                                                    className={'Control_Btn Update'}
                                                >
                                                    Update
                                                </div>
                                            </div> : ''


                                    }
                                </div>
                            </li>
                        }) : <div className={'loading_Room'}>
                            <CircularProgress/>
                        </div>
                    }
                </div>
                <Footer/>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
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


