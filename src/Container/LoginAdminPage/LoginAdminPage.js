import React from "react";
import './LoginAdmin.scss'
import {Link} from 'react-router-dom';
import {login} from '../../actions/UserFunctions'


export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
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

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/User`)
            }
        })
    }

    render() {
        return (

            <div className='loginRegister'>
                <div className='container'>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="base-container">
                            <div className="header">Login</div>
                            <div className="content">

                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email"
                                               name="email"
                                               placeholder="email"
                                               value={this.state.email}
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password"
                                               name="password"
                                               placeholder="password"
                                               value={this.state.password}
                                               onChange={this.onChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="login-footer">
                                <button type="submit"
                                        className="btn">
                                    Login
                                </button>

                                <Link to="/register" className={`btnRegister`}>Register</Link>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
