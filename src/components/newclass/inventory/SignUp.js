import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        let SignUp = ()=>{
            document.getElementById('auth-wrap').style.display='block';
            
        // clearInterval(myCar)
        // music.pause()
        }
        
        return (
            <form id="auth-wrap">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button  class="btn btn-danger navbar-btn" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a onClick={SignUp} >sign in?</a>
                </p>
            </form>
        );
    }
}