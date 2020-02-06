import {FIND_ALL_ROOMS, FIND_ALL_USER} from "../actions-type/actions-type";

export default function HotelReducer(state = [], action) {
    switch (action.type) {
        case FIND_ALL_USER:
            const{users} = action;
            return {...state, users};

        case FIND_ALL_ROOMS:
            const{rooms} = action;
            return {...state, rooms};

        default:
            return state;
    }
}