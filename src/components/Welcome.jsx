import React from 'react';
import {Container, Alert} from 'react-bootstrap/';


export default function Welcome (){
    return(
        <>
        <Container>
        <h1>Libri Fantasy</h1>
        </Container>

        {['success'].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
      </>
    )
}