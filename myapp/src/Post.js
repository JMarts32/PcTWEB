import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import React from 'react';
import { useState } from "react";


function Post(props){
    const [likes, setLikes] = useState(props.likes);

    const renderLikes = () => {
        if (likes === 0) return "Dame un like bobo malo";
        else return "Likes: " + likes;
    };

    const handleLikes = () => {
        console.log("Button clicked...");
        setLikes(likes + 1);
    };

    return (
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body className="mb-3">
              <Card.Title>{props.author}</Card.Title>
              <Card.Text>{props.content}</Card.Text>
              <Card.Text>{renderLikes()}</Card.Text>
              <Button variant="primary" onClick={handleLikes}>
                Like
                </Button>
            </Card.Body>
          </Card>
        </Col>
    );
}

export default Post;