import React,{useState} from "react";

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
    <form onSubmit={onSubmit}>
      <input type="text" id="title" onChange={handleChange} />
      <button type="submit">search</button>
    </form>
  );
}

export default Filter;
