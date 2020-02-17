import React, {Component} from "react";
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import './ListUser.css'
import {User} from "../../actions/getUser";

class UserList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchData("/user/findAllUser");
    }

    render() {

        return (
            <div className={'listUser'}>
                <div className={'header-user'}>

                    <div className={'All_Users'}>All Users!</div>

                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.props.history.goBack}
                    >goBack</Button>


                </div>

                <ul>
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
                            <CircularProgress />
                        </div>
                    }

                </ul>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    console.log(store);
    return {
        users: store.HotelReducer.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => dispatch(User(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);