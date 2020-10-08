import React, { Component } from 'react';

class Login extends Component {
    state = {}
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
                                        <img className="rounded-circle" src="https://placeimg.com/128/128/tech/sepia" />
                                    </div>
                                    <form className="form-signin mt-3">
                                        <div className="from-control">
                                            <label htmlFor="usenrame">Username</label>
                                            <input type="text"
                                                className="form-control mb-2"
                                                placeholder="Email" required autofocus
                                            />
                                        </div>
                                        <div className="from-control">
                                            <label htmlFor="usenrame">Password</label>
                                            <input type="password"
                                                className="form-control mb-2"
                                                placeholder="Password" required
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
