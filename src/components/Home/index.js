import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container>
          <div className="py-3 text-center">
            <h2>Instagram Posts</h2>
            <p className="lead">
              below are example of posts, write some description here
            </p>
          </div>
          <Row>
            <Col>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="src/media/image-placeholder.svg"
                  alt="Card"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>some text inside card</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="src/media/image-placeholder.svg"
                  alt="Card"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>some text inside card</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="src/media/image-placeholder.svg"
                  alt="Card"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>some text inside card</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
