import React, { Component } from "react";
// import SignUp from "./SignUp";

export default class Login extends Component {
    render() {
        return (
            <form className="auth-wrapper"> 
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button  class="btn btn-danger navbar-btn" >Submit</button>
                <p className="forgot-password text-right">
                    Not a user <a href="#">Register here</a>
                </p>
            </form>
        );
    }
}