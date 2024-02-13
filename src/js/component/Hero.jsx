import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Hero() {
  return (
    <Card className="py-5 px-3 m-4 bg-light">
      <Card.Body>
        <Card.Title className="display-1">A Warm Welcome!</Card.Title>
        <Card.Text className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni expedita et consectetur nostrum labore quis delectus quod explicabo distinctio voluptatum aspernatur velit vero, voluptates assumenda! Fugit, repellat. Itaque possimus quasi, culpa labore ab non sit blanditiis quia modi provident veniam?
        </Card.Text>
        <Button variant="primary">Call to action!</Button>
      </Card.Body>
    </Card>
  );
}




export default Hero;