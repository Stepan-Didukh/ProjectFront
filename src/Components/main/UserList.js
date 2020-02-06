import React, {Component} from "react";
import {connect} from "react-redux";
import {User} from "../../actions/getUser";

class UserList extends Component {

    componentDidMount() {
        this.props.fetchData('/user/findAllUser')
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.users.map((person, id) => {
                            return <li key={id}>
                                <div>Name: {person.name}</div>
                                <div>Surname: {person.surname}</div>
                                <div>Email: {person.email}</div>
                            </li>
                        })
                    }

                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(User(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);