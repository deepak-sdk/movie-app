import React, { useState } from "react";
import Button from '@mui/material/Button';
import { NewMovie } from "./NewMovie/NewMovie";
import './AddMovie.css';

export function AddMovie() {

  const [showAddMovieForm, setShowAddMovieForm] = useState(false)

  const cancelAddMovieFormHandler = () => {
    setShowAddMovieForm(false)
  }

  // const saveMovieDataHandler = () => {


  //   // addMovies(newMovie)
  //   setShowAddMovieForm(false)

  // }


  // const [movies, setMovies] = useState(martinscorses);

  // const addMovies = () => {
  //     console.log("check")
  //     const newMovie = {
  //         name: name,
  //         pic: pic,
  //         rating: rating,
  //         summary: summary,
  //         year: year,
  //     };
  //     // console.log(newMovie);
  //     // copy the movies list and add new movie
  //     const copy = [...movies]
  //     copy.push(newMovie)
  //     setMovies(copy);
  //     // console.log(movies);
  // };


  // console.log(addMovies)

  return (
    <div class="add-movie-input-container">
      {!showAddMovieForm && <Button variant="outlined" onClick={() => { setShowAddMovieForm(true) }}>Add New Movie</Button>}
      {showAddMovieForm && <NewMovie onCancel={cancelAddMovieFormHandler} />}


    </div>
  );
}
