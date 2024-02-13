import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import rigoImage from "../../img/imagen_base.jpg";

function Cards() {
  return (
    <CardGroup className="d-grip gap-4 m-4">
      <Card className="text-center border" >
        <Card.Img variant="top" src="/imagen_base.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam soluta fugit dolore impedit dicta doloremque molestiae et delectus fuga amet?
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
            <Button variant="primary">Find Out More!</Button>
        </Card.Footer>
      </Card>
      <Card className="text-center border">
        <Card.Img variant="top" src="/imagen_base.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam soluta fugit dolore impedit dicta doloremque molestiae et delectus fuga amet?
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
            <Button variant="primary">Find Out More!</Button>
        </Card.Footer>
      </Card>
      <Card className="text-center border">
        <Card.Img variant="top" src="/imagen_base.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam soluta fugit dolore impedit dicta doloremque molestiae et delectus fuga amet?
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
            <Button variant="primary">Find Out More!</Button>
        </Card.Footer>
      </Card>
      <Card className="text-center border">
        <Card.Img variant="top" src="/imagen_base.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam soluta fugit dolore impedit dicta doloremque molestiae et delectus fuga amet?
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
            <Button variant="primary">Find Out More!</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;