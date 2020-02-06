import React, {Component} from "react";
import {connect} from "react-redux";
import {User} from "../../actions/getUser";

class UserList extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        this.props.fetchData("/user/findAllUser");

    }

    render() {
        return (
            <div>
                <ul>
                    {  this.props.users?
                        this.props.users.map((person) => {
                            return <li key={person.id}>
                                <div>Name: {person.name}</div>
                                <div>Surname: {person.username}</div>
                                <div>Email: {person.email}</div>
                            </li>
                        }) : "Loading"
                    }

                </ul>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    console.log(store);
    return {
        users : store.HotelReducer.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => dispatch(User(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);