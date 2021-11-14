import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import './AddMovie.css';

export function AddMovie({ addMovies }) {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [trailer, setTrailer] = useState("");

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

  const sendDataToParent = (e) => {
    e.preventDefault()
    const newMovie = {
      name,
      pic,
      rating,
      summary,
      year,
      trailer,
    };

    addMovies(newMovie);
    setName('');
    setPic('');
    setRating('');
    setSummary('');
    setYear('');
    setTrailer('')
  };
  // console.log(addMovies)

  return (
    <div class="add-movie-input-container">

      <TextField
        id="outlined-basic"
        label="Movie Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Movie Poster URL"
        variant="outlined"
        value={pic}
        onChange={(event) => setPic(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Year"
        variant="outlined"
        value={year}
        onChange={(event) => setYear(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Trailer Embed-URL"
        variant="outlined"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
      />
      <Button onClick={sendDataToParent} variant="outlined">Add Movie</Button>
    </div>
  );
}
