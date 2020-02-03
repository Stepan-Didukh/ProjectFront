import React, {Component} from "react";
import './AdminPage.css'
import {Link} from "react-router-dom";
import {Logo} from "../../Components/Logo/Logo";
import {createRoom} from "../../actions/UserFunctions";

class AdminPage extends Component {

    constructor() {
        super();
        this.state = {
            price: '',
            square: '',
            amount: '',
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
            amount: this.state.amount
        };

        createRoom(room).then(res => {
            if (res) {
                alert('All was done!')
            }
        })
    }


    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className={'headerUser'}>
                    <Logo/>
                    <Link className="nav-link" to={'/support'}>Support</Link>
                    <Link onClick={this.logOut.bind(this)} className="nav-link" to={''}>Logout</Link>
                </div>

                <main className={'main'}>
                    <div className={'createNewRooms'}>
                        <div className={'h2'}>Create new room</div>
                        <form createRoom onSubmit={this.onSubmit}>
                            <div className={'inputBox'}>
                            <div  className="form-group">
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
                                    onClick={event => (!this.state.amount || !this.state.price || !this.state.square) ? event.preventDefault() : null}
                                    type="submit"
                                    className="btn"> Register
                                </button>
                            </div>
                        </form>
                    </div>
                </main>

            </div>

        )
    }

}

export default AdminPage;
