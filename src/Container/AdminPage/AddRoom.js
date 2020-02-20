import React, {Component} from "react";
import './AddRoom.css'
import {createRoom} from "../../actions/UserFunctions";

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
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const room = {
            price: this.state.price,
            square: this.state.square,
            amount: this.state.amount,
            nameRoom: this.state.nameRoom,
            about: this.state.about,
            park: this.state.park,
        };

        createRoom(room).then(res => {
            if (res) {
                console.log(22);
            }
        })
    }

    render() {

        return (
            <div>

                <main className={'main'}>
                    <div className={'display-flex'}>
                        <div className={'createNewRooms'}>
                            <div className={'h2'}>Create new room</div>
                            <form createRoom onSubmit={this.onSubmit}>
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
                                </div>
                                <div className="login-footer">

                                    <button
                                        onClick={event => (!this.state.amount || !this.state.price || !this.state.square || !this.state.nameRoom || !this.state.about) ? event.preventDefault() : null}
                                        type="submit"
                                        className="btn"> Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>

            </div>

        )
    }

}

export default AddRoom;
