import React, {Component} from "react";
import {RoomListCard} from '../index'
import CircularProgress from "@material-ui/core/CircularProgress";

export default class RoomList extends Component {

    render() {
        const {Rooms, Admin} = this.props;
        return (
            <section>
                {
                    Rooms ? Rooms.map(room => {
                        return (
                            <RoomListCard
                                Admin={Admin}
                                room={room}
                                key={`${room.id}`}/>
                        )
                    }) : <div className={'loading_Room'}>
                    <CircularProgress/>
                    </div>
                }
            </section>
        )
    }

}