import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import PostCard from "../PostCard";
import UserCard from "../UserCard";

class Posts extends Component {
  render() {
    return (
      <div>
        <div className="py-3 text-center">
          <h2>Instagram Posts</h2>
          <p className="lead">
            below are example of posts, write some description here
          </p>
        </div>
        <Row>
          <Col md={8}>
            <PostCard />
            <PostCard />
          </Col>
          <Col md={4}>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Posts;
