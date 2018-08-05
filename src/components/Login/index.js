import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  redirect = () => this.props.history.push("/");

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  loginHandler = () =>
    this.props.login(this.state).then(res => {
      if (res) {
        setTimeout(() => this.redirect(), 1000);
      }
    });

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
              onChange={this.onChange}
              value={this.state.email}
              className="form-control"
              autoComplete="new-email"
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
              onChange={this.onChange}
              value={this.state.password}
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
          <Button
            onClick={this.loginHandler}
            type="button"
            className="btn btn-primary btn-lg btn-block"
          >
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
