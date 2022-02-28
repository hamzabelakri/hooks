import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Movie(collection) {

    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/");
    };
    const { id } = useParams()
    const element = collection.collection.find(ab => ab.id == id)
    return (
    <>
        <h1>More Info</h1>
        <p>{element.decription}</p>
        <p>{element.Url}</p>
        <Button onClick={handleClick}>Go Back</Button>
        </>
    )
}

export default Movie