import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Card.css";
function MovieCard({ film }) {
  return (
    <Link to={`/movie/${film.id}`}>
      <Card className="Card">
        <Card.Img variant="top" src={film.poster} />
        <Card.Body>
          <Card.Title>{film.title}</Card.Title>
          <Card.Text>{film.decription}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MovieCard;
