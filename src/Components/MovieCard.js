import React from 'react'
import { Button, Card } from 'react-bootstrap';

function MovieCard({film}) {
  return (
    <Card style={{ width: '18rem', margin: 'auto' }}>
    <Card.Img variant="top" src={film.poster} />
    <Card.Body>
      <Card.Title>{film.title}</Card.Title>
      <Card.Text>{film.decription}</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default MovieCard