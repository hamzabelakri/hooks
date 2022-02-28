import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./Card.css";


function Add({ AddMovie }) {
  const [newMovie, setMovie] = useState({ id: 3, title: "", poster: "" });
  const HandleChange = (event) => {
    setMovie({...newMovie,
      id: Math.floor(Math.random() * 10000) + 1,
      [event.target.id]:event.target.value
    });
  };
  console.log(newMovie);
  const onSubmit = (event) => {
    event.preventDefault();
    AddMovie(newMovie);
    setMovie({ title: "", poster: "" });
  };
  return (
    <Form className="Form" onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>New Collection</Form.Label>
        <Form.Control
          value={newMovie.title}
          id="title"
          type="text"
          placeholder="choose a movie"
          onChange={HandleChange}
        />
        <Form.Control
          id="poster"
          value={newMovie.poster}
          type="text"
          placeholder="post an image"
          onChange={HandleChange}
        />
      </Form.Group>
      <Button style={{ textAlign: "center" }}variant="primary" type="submit">
        Add a Movie
      </Button>
    </Form>
  );
}

export default Add;
