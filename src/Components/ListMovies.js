import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';
import React, { useState } from 'react';
import Add from './Add';
import Filter from './Filter';





const ListMovies = (collection) => {
    const [movies, setMovie] = useState(collection.collection)
    console.log(movies)
    const AddMovie=(newMovie) => {
        setMovie ([...movies, newMovie])
     
    }
    const onSeqrch=(carcter)=>{
        setMovie(movies.filter((elt)=>elt.title.toLowerCase().includes((carcter.toLowerCase()))))
    }

    return(
    <div>
        <Filter onSeqrch={onSeqrch}/>
       {movies.map((elt)=><MovieCard film={elt} key={elt.id}/>)}
       <Add AddMovie={AddMovie}/>  
       
    </div>
    )
}


export default ListMovies;