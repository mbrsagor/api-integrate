import React, { Component } from 'react';
import LoginService from '../services/LoginService';

const auth_service = new LoginService()

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    // Login handler
    handleLogin(e) {
        e.preventDefault();

        auth_service.login(this.state.username, this.state.password).then(
            (response) => {
                const token = response.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                // this.props.history.push('/dashboard');
                console.log(`Token: ${token}`);
            }, error => {
                this.setState({
                    'message': 'Someting went wrong, retry or contact administrator.'
                })
            }
        )
    }


    render() {
        return (
            <>
                <div className="container pt-3">
                    <div className="row justify-content-sm-center">
                        <div className="col-sm-6 col-md-4">
                            <div className="card border-info">
                                <div className="card-header text-center"> Sign in to continue </div>
                                <div className="card-body">
                                    <div className="logo text-center">
                                        <img className="rounded-circle" src="https://placeimg.com/128/128/tech/sepia" alt="logo"/>
                                    </div>
                                    <form onSubmit={this.handleLogin} className="form-signin mt-3">
                                        <div className="from-control">
                                            <label htmlFor="usenrame">Username</label>
                                            <input type="text"
                                                value={this.state.username}
                                                onChange={this.onChangeUsername}
                                                name="usenrame"
                                                id="username"
                                                className="form-control mb-2"
                                                placeholder="username"
                                            />
                                        </div>
                                        <div className="from-control">
                                            <label htmlFor="password">Password</label>
                                            <input type="password"
                                                value={this.state.password}
                                                onChange={this.onChangePassword}
                                                name="password"
                                                id="password"
                                                className="form-control mb-2"
                                                placeholder="********" required
                                            />
                                        </div>
                                        <button className="btn btn-sm btn-primary mr-5 mb-1" type="submit">Sign in</button>
                                        <label className="checkbox">
                                            <input type="checkbox" value="remember-me" /> Remember me </label>
                                    </form>
                                </div>
                            </div>
                            <a href="#0" className="float-right">Create an account </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
