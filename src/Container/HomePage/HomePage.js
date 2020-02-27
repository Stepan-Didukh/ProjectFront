import React, {Component} from "react";
import Header from "../../Components/Header/Header";
import CircularProgress from "@material-ui/core/CircularProgress";
import HotelIcon from '@material-ui/icons/Hotel';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import {Footer} from "../../Components/Footer/Footer";
import {connect} from "react-redux";
import {Room} from "../../actions/getRoom";
import Photo from '../../assets/westindtla.jpg'
import './HomePage.css'
import axios from "axios";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ShowCreateRoom: true,
            price: '',
            square: '',
            amount: '',
            nameRoom: '',
            about: '',
            park: '',
            fileName: null,
            errors: {},
            search: ''
        };

        this.toggleDangerAlert = this.toggleDangerAlert.bind(this);
        this.toggleDangerAlertOff = this.toggleDangerAlertOff.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    updateSearch(event) {
        this.setState({
            search: event.target.value.substr(0, 20)
        })
    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onChangeHandler = event => {
        this.setState({
            fileName: event.target.files[0],
            loaded: 0,
        })
    };

    componentDidMount() {
        this.props.fetchData("http://localhost:5000/room/findAll")
    }

    deleteRoom = id => {
        return axios
            .delete(`http://localhost:5000/room/${id}`)
            .catch(err => {
                console.error(err);
            });
    };

    toggleDangerAlert() {
        const {toggleDangerAlert} = this.props;

        toggleDangerAlert && toggleDangerAlert();

        this.setState({
            ShowCreateRoom: false
        })
    }

    toggleDangerAlertOff() {
        const {toggleDangerAlertOff} = this.props;

        toggleDangerAlertOff && toggleDangerAlertOff();

        this.setState({
            ShowCreateRoom: true
        })
    }

    createRoom = () => {

        const data = new FormData();
        data.append('file', this.state.fileName);
        data.append('price', this.state.price);
        data.append('square', this.state.square);
        data.append('amount', this.state.amount);
        data.append('nameRoom', this.state.nameRoom);
        data.append('about', this.state.about);
        data.append('park', this.state.park);

        axios.post("http://localhost:5000/room", data, {}).then(() => {
            console.log(22);
        })
    };

    render() {

        console.log(this.state.search);

        const pushHomePage = this.props.history;
        const Rooms = this.props.rooms;
        const {ShowCreateRoom} = this.state;
        const HideBtnAddRoom = ShowCreateRoom ? 'addRoom' : 'Hide';
        const ShowBoxCreateRoom = ShowCreateRoom ? 'Hide' : 'createRoom';

        return (
            <div>
                <Header pushHomePage={pushHomePage}/>

                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                    className={'Photo_Box'}
                    src={Photo}
                    alt="Photo"
                />

                <input
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                    type={'text'}/>

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
                                                            this.componentDidMount()
                                                        })
                                                    }}
                                                >
                                                    Delete {room.id}
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
                {
                    this.props.location.pathname === `/Admin` && localStorage.token ?
                        <div className={'ListRoom_Home_Page'}>
                            <button
                                className={`${HideBtnAddRoom}`}
                                onClick={this.toggleDangerAlert}
                            >
                                <div className={'lineAddRoomBtn correct'}/>
                                <div className={'lineAddRoomBtn transRot'}/>
                            </button>
                            <div className={`${ShowBoxCreateRoom}`}>

                                <input type="file"
                                       name="file"
                                       className={'Room-Photo'}
                                       accept=".png, .jpg"
                                       onChange={this.onChangeHandler}/>

                                <img src={this.fileName} alt=""/>

                                <div className={''}>

                                </div>
                                <div className={'Main_info_Room'}>
                                    <input type="text"
                                           name="nameRoom"
                                           placeholder="Name"
                                           className={'Name-Room default_input'}
                                           value={this.state.nameRoom}
                                           onChange={this.onChange}/>
                                    <div className={'Param_Room'}>Площа: ( м2 )
                                        <input type="int"
                                               name="square"
                                               placeholder="square"
                                               className={'default_input'}
                                               value={this.state.square}
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className={'display-flex'}>
                                        <HotelIcon/>
                                        <div className={'Param_Room'}>
                                            <input type="int"
                                                   name="amount"
                                                   placeholder="amount"
                                                   className={'default_input'}
                                                   value={this.state.amount}
                                                   onChange={this.onChange}/>
                                        </div>
                                        <LocalParkingIcon className={'margin'}/>
                                        <div className={'Param_Room'}>
                                            <input type="text"
                                                   name="park"
                                                   placeholder="park"
                                                   className={'default_input'}
                                                   value={this.state.park}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>
                                    <div className={'About_Room'}>
                                        <input type="int"
                                               name="about"
                                               placeholder="about"
                                               className={'default_input about'}
                                               value={this.state.about}
                                               onChange={this.onChange}/>
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
                                        24h from: <div className={'Price_Room'}>

                                        <input type="int"
                                               name="price"
                                               className={'price default_input'}
                                               value={this.state.price}
                                               onChange={this.onChange}/>
                                    </div>
                                    </div>
                                    <div className={'Control_Room'}>
                                        <button
                                            onClick={() => {
                                                this.createRoom();
                                                this.componentDidMount()
                                            }

                                            }
                                            type="submit"
                                            className="Control_Btn Reserve"> Add
                                        </button>

                                    </div>

                                </div>

                                <CancelOutlinedIcon
                                    onClick={this.toggleDangerAlertOff}
                                    className={'closeIcon'}
                                />


                            </div>
                        </div>
                        : ""
                }
                <Footer/>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    console.log(store.search);
    return {
        rooms: store.HotelReducer.rooms
        //     .filter(
        //     (room)=>{
        //         return room.id.indexOf(this.state.search)!== -1;
        //     }
        // )
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchData: url => dispatch(Room(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


