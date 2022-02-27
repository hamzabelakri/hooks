import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './Components/MovieCard';
import React, { useState, useEffect } from 'react';
import Add from './Components/Add';
import Filter from './Components/Filter';





function App() {

  const collection = [

    {
      id: '1',
      title: 'The Conjuring',
      poster: 'https://m.media-amazon.com/images/I/81yAfVk+7UL._AC_SY606_.jpg',
      decription:
        'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
      rate: 2,
    },
    {
      id: '2',
      title: 'The Grudge',
      poster:
        'https://aws-cf.imdoc.fr/prod/photos/8/6/1/11904861/29176577/big-29176577abb.jpg?v=2',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: 3,
    },
    {
      id: '3',
      title: 'The Ring',
      poster: 'https://m.media-amazon.com/images/I/41CGtdWTDvL._AC_.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: 1,
    },
    {
      id: '4',
      title: 'The Shawshank Redemption',
      poster: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: 3,
    },
    
    {
      id: '5',
      title: 'The Godfather: Part II',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hYUlSTUgCxfY-8ACz_E3CQWDKShEYEvGFw&usqp=CAU',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: 3,
    },
    {
      id: '7',
      title: 'The Dark Knight',
      poster: 'https://m.media-amazon.com/images/I/51CbCQNMyiL._AC_.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: 2,
    },
    {
      id: '8',
      title: '12 Angry Men',
      poster: 'https://m.media-amazon.com/images/I/81zZhjymV7L._AC_SL1500_.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: 3,
    }]

   const [movies, setMovie] = useState(collection)
   const AddMovie=(newMovie) => {
    setMovie ([...movies, newMovie])
    
  }
const onSeqrch=(carcter)=>{
  setMovie(movies.filter((elt)=>elt.title.toLowerCase().includes((carcter.toLowerCase()))))
}
  return (
    <div>
      <Filter onSeqrch={onSeqrch}/>
      <Add AddMovie={AddMovie}/>  
     {movies.map((elt)=><MovieCard film={elt} key={elt.id}/>)}
     
    </div>
  );
}

export default App;
