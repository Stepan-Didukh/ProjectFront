import {FIND_ALL_USER} from "../actions-type/actions-type";

export default function HotelReducer(state = [], action) {
    switch (action.type) {
        case FIND_ALL_USER:
            return action.users;
        default:
            return state;
    }
}