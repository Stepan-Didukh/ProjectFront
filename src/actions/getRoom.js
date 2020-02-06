import {FIND_ALL_ROOMS} from '../actions-type/actions-type'

export  function UserSuccess(rooms) {
    return{
        type:FIND_ALL_ROOMS,
        rooms
    }
}
export function Room(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(rooms  => dispatch(UserSuccess(rooms)))
            .catch(()=>{});
    }
}