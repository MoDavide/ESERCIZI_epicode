import React from "react";
import { Container, ListGroup } from "react-bootstrap";


export default function AllTheBooks(props) {
  return (
    <>
      <Container>
        <ListGroup>
          {props.immagini.map(im =>
          <ListGroup.Item><img className ="w-25" src={im.img}></img></ListGroup.Item>)}    
        </ListGroup>
      </Container>
    </>
  );
}
 