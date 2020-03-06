import {FIND_ALL_ROOMS, FIND_ALL_USER,} from "../actions-type/actions-type";

const initialState = {
    rooms: []
};

const HotelReducer = (state = initialState, action)=> {
    switch (action.type) {

        case FIND_ALL_USER:
            const {users} = action;
            return {...state, users};

        case FIND_ALL_ROOMS:
            const {rooms} = action;
            return {...state, rooms};

        default:
            return state;
    }
}

export default HotelReducer