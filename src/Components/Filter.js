import React,{useState} from "react";
import "./Card.css";


function Filter({ onSeqrch }) {
  
  const [caracter, setCaracter] = useState("");
  const handleChange = (event) => {
    setCaracter(event.target.value);
  };
  
const   onSubmit=(event)=>{
  event.preventDefault()
  onSeqrch(caracter)

}
  return (
    <form className="Search" onSubmit={onSubmit}>
      <input type="text" placeholder="Search for a movie" id="title" onChange={handleChange} />
      <button type="submit">search</button>
    </form>
  );
}

export default Filter;
