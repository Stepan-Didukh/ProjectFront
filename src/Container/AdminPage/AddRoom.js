import React, {Component} from "react";
import './AddRoom.css'
import {Link} from "react-router-dom";
// import {createRoom} from "../../actions/UserFunctions";
import Chat from "../../Components/Chat/Chat";
import Store from "../../Reducers/ChatStore/ChatStore";
import axios from 'axios';
const queryString = require('query-string');

class AddRoom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            price: '',
            square: '',
            amount: '',
            nameRoom: '',
            about: '',
            park: '',
            fileName:null,
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
    }
    createRoom = () => {

        const data = new FormData();
        data.append('file',this.state.fileName);
        data.append('price',this.state.price);
        data.append('square',this.state.square);
        data.append('amount',this.state.amount);
        data.append('nameRoom',this.state.nameRoom);
        data.append('about',this.state.about);
        data.append('park',this.state.park);

        axios.post("http://localhost:5000/room",  data,{
        }).then(res => {
            console.log(res.statusText)
        })

    };

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onChangeHandler=event=>{
        this.setState({
            fileName: event.target.files[0],
            loaded: 0,
        })
    };

    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/');
    }

    render() {

        const parsed = queryString.parse(this.props.location.search);

        return (
            <div>
                <div className={'headerUser'}>

                    <Link
                        to={`/UserList`}
                        className="nav-link"
                    >Users</Link>
                    <Link
                        to={`/RoomList`}
                        className="nav-link"
                    >Room</Link>
                    <Link
                        onClick={this.logOut.bind(this)}
                        className="nav-link"
                        to={''}
                    >Logout</Link>
                </div>

                <main className={'main'}>
                    <div className={'display-flex'}>
                        <div className={'createNewRooms'}>
                            <div className={'h2'}>Create new room</div>
                            <form createRoom >
                                <div className={'inputBox'}>
                                    <div className="form-group">
                                        <label htmlFor="nameRoom">nameRoom</label>
                                        <input type="text"
                                               name="nameRoom"
                                               placeholder="nameRoom"
                                               value={this.state.nameRoom}
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="park">park</label>
                                        <input type="text"
                                               name="park"
                                               placeholder="park"
                                               value={this.state.park}
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="about">about</label>
                                        <input type="int"
                                               name="about"
                                               placeholder="about"
                                               value={this.state.about}
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Price</label>
                                        <input type="int"
                                               name="price"
                                               placeholder="price"
                                               value={this.state.price}
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="square">Square</label>
                                        <input type="int"
                                               name="square"
                                               placeholder="square"
                                               value={this.state.square}
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="amount">Amount</label>
                                        <input type="int"
                                               name="amount"
                                               placeholder="amount"
                                               value={this.state.amount}
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Add Image</label>
                                        <input type="file"
                                               name="file"
                                               accept=".png, .jpg"
                                               onChange={this.onChangeHandler}/>

                                        <img src={this.fileName} alt=""/>
                                    </div>

                                </div>
                                <div className="login-footer">

                                    <button
                                        onClick={this.createRoom}
                                        type="submit"
                                        className="btn"> Register
                                    </button>
                                </div>
                            </form>
                        </div>
                        <Store>
                            <Chat parsed={parsed}/>
                        </Store>
                    </div>
                </main>

            </div>

        )
    }

}

export default AddRoom;
