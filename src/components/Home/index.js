import React, { Component } from "react";
import { Container } from "reactstrap";
import Posts from "../Posts";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container>
          <Posts />
        </Container>
      </div>
    );
  }
}

export default Home;
