import React, {Component} from "react";
import {User} from "../../actions/getUser";
import {connect} from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import './UserInfo.css'

class UserInfo extends Component {

    componentDidMount() {
        this.props.fetchData("/user/findAllUser");
    }


    render() {
        return (
            <div>
                {this.props.users ?
                    this.props.users.map((person) => {
                        return <li
                            key={person.id}
                            className={'UserCart'}>
                            <div className={'paramUser'}>Name: {person.name}</div>
                            <div className={'paramUser'}>Surname: {person.surname}</div>
                            <div className={'paramUser'}>Email: {person.email}</div>
                        </li>
                    }) : <div className={'loading'}>
                        <CircularProgress/>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (store) => {

    return {
        users: store.HotelReducer.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => dispatch(User(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);