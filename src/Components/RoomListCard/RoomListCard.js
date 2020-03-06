import React, {Component} from "react";
import {RoomInfo} from '../index'

export default class RoomListCard extends Component {

    render() {
        const {room, Admin} = this.props;

        return (
            <div className={'ListRoom_Home_Page'}>
                {/*Photo*/}

                <RoomInfo
                    nameRoom={room.nameRoom}
                    square={room.square}
                    amount={room.amount}
                    park={room.park}
                    about={room.about}
                    price={room.price}
                    id={room.id}
                    status_id={room.status_id}
                    Admin={Admin}
                />
            </div>
        )
    }
}