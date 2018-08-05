import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./index.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <form className="Login_form-signin">
          <div className="text-center mb-4">
            <img
              className="mb-4"
              src="src/media/instagram-logo.png"
              alt="Instagram"
              width={70}
              height={70}
            />
            <h3 className="mb-3 font-weight-normal">React JS Bootcamp</h3>
            <p>Login to see your awesome app</p>
          </div>
          <div className="Login_form-label-group">
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              type="email"
              id="inputEmail"
              required
            />
            <label htmlFor="inputEmail">Email</label>
          </div>
          <div className="Login_form-label-group">
            <input
              className="form-control"
              placeholder="Password"
              autoComplete="new-password"
              type="password"
              id="inputPassword"
              name="password"
              required
            />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <Button type="button" className="btn btn-primary btn-lg btn-block">
            Sign in
          </Button>
          <Link
            to="/register"
            className="btn btn-link mt-1 w-100 text-muted text-center"
          >
            New user? register here
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
