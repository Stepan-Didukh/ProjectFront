import React, {Component} from "react";
import HotelIcon from "@material-ui/core/SvgIcon/SvgIcon";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import axios from "axios";

export default class RoomInfo extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    deleteRoom = id => {
        return axios
            .delete(`http://localhost:5000/room/${id}`)
            .catch(err => {
                console.error(err);
            });
    };


    render() {
        const {nameRoom, square, amount, park, about, price, id,status_id, Admin} = this.props;
        return (
            <li

                className={'RoomCart'}>
                <div className={'Room-Photo'}>
                    {/*Тут має бути фотка кімнати!*/}
                </div>
                <div className={'Main_info_Room'}>
                    <div className={'Name-Room'}>{nameRoom}</div>
                    <div className={'Param_Room'}>Площа: {square} ( м2 ) {10.764 * square} (
                        фут2 )
                    </div>
                    <div className={'display-flex'}>
                        <HotelIcon/>
                        <div className={'Param_Room'}> {amount}</div>
                        <LocalParkingIcon className={'margin'}/>
                        <div className={'Param_Room'}> {park}</div>
                    </div>
                    <div className={'About_Room'}>
                        {about}
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
                        24h from: <div className={'Price_Room'}>{price} UAH
                    </div>

                    </div>
                    {
                        localStorage.token && status_id===2 ?
                            <div className={'Control_Btn Reserve'}>
                                Reserve
                            </div> : <div className={"Reserved"}>
                                This room is reserved
                            </div>
                    }
                    {
                        Admin === `/Admin` && localStorage.token && status_id===2 ?

                            <div className={'Control_Room'}>
                                <div
                                    className={`Control_Btn Delete`}
                                    onClick={() => {
                                        this.deleteRoom(id).then(() => {

                                        })
                                    }}
                                >
                                    Delete {id}
                                </div>

                            </div> : ''
                    }
                </div>
            </li>
        )
    }

}