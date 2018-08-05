import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const PostCard = () => (
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
);

export default PostCard;
