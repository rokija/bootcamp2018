import React, { Component } from "react";
import { Button } from "reactstrap";
import "./index.css";

class Register extends Component {
  render() {
    return (
      <div className="Register">
        <form className="Register_form-signin">
          <div className="text-center mb-4">
            <img
              className="mb-4"
              src="src/media/instagram-logo.png"
              alt="Instagram"
              width={70}
              height={70}
            />
            <h3 className="mb-3 font-weight-normal">React JS Bootcamp</h3>
            <p>Register to see your awesome app</p>
          </div>
          <div className="Register_form-label-group">
            <input
              className="form-control"
              placeholder="UserName"
              name="username"
              type="username"
              id="registerUsername"
              required
            />
            <label htmlFor="registerUsername">UserName</label>
          </div>
          <div className="Register_form-label-group">
            <input
              className="form-control"
              autoComplete="new-email"
              placeholder="Email"
              name="email"
              type="email"
              id="registerEmail"
              required
            />
            <label htmlFor="registerEmail">Email</label>
          </div>
          <div className="Register_form-label-group">
            <input
              className="form-control"
              placeholder="Password"
              autoComplete="new-password"
              type="password"
              id="registerPassword"
              name="password"
              required
            />
            <label htmlFor="registerPassword">Password</label>
          </div>
          <Button type="button" className="btn btn-primary btn-lg btn-block">
            Register
          </Button>
        </form>
      </div>
    );
  }
}

export default Register;
