import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import "./EditMovie.css";
import { API_URL } from './../../API_URL';

export const EditMovie = () => {
  const { id } = useParams();
  console.log(id)
  // const movie = martinscorses[id];

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);
  return movie ? <UpdateMovie movie={movie} setMovie={setMovie} /> : "";
};

// Race Condition - Race b/w useEffect and useState

const formValidationSchema = yup.object({
  name: yup.string().required(),
  pic: yup.string().min(5).required(),
  rating: yup.number().min(0).max(10).required(),
  summary: yup.string().min(20).required(),
  year: yup.number().min(1890).required(),
  trailer: yup.string().min(6).required(),
});

export const UpdateMovie = ({ movie, setMovie }) => {
  const { id } = useParams();
  const history = useHistory();

  // const [name, setName] = useState(movie.name);
  // const [pic, setPic] = useState(movie.pic);
  // const [summary, setSummary] = useState(movie.summary);
  // const [rating, setRating] = useState(movie.rating);
  // const [year, setYear] = useState(movie.year);
  // const [trailer, setTrailer] = useState(movie.trailer);

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: movie.name,
        pic: movie.pic,
        summary: movie.summary,
        rating: movie.rating,
        year: movie.year,
        trailer: movie.trailer,
      },
      //   validate: validateForm,
      validationSchema: formValidationSchema,
      onSubmit: (updatedMovie) => {
        editMovie(updatedMovie);
      },
    });

  const editMovie = (updatedMovie) => {
    // e.preventDefault();
    // const updatedMovie = {
    //   name,
    //   pic,
    //   rating,
    //   summary,
    //   year,
    //   trailer,
    // };

    // Swaping data
    // console.log(updatedMovie);

    // const copyMovieList = [...martinscorses];
    // copyMovieList[id] = updatedMovie;
    // setMovies(copyMovieList);
    // history.push("/");

    fetch(
      `${API_URL}/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedMovie),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((data) => data.json())
      .then((movie) => setMovie(movie))
      .then(() => history.push("/"));
  };
  return (
    <form onSubmit={handleSubmit} className="edit-movie-input-container">
      <TextField
        id="name"
        label="Movie Name"
        variant="outlined"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        error={errors.name && touched.name}
        helperText={errors.name && touched.name && errors.name}
      />

      <TextField
        id="pic"
        label="Movie Poster URL"
        variant="outlined"
        name="pic"
        value={values.pic}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        error={errors.pic && touched.pic}
        helperText={errors.pic && touched.pic && errors.pic}
      />

      <TextField
        iid="rating"
        label="Rating"
        variant="outlined"
        name="rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        type="number"
        error={errors.rating && touched.rating}
        helperText={errors.rating && touched.rating && errors.rating}
      />

      <TextField
        id="summary"
        label="Summary"
        variant="outlined"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        error={errors.summary && touched.summary}
        helperText={errors.summary && touched.summary && errors.summary}
      />

      <TextField
        id="year"
        label="Year"
        variant="outlined"
        name="year"
        value={values.year}
        onChange={handleChange}
        onBlur={handleBlur}
        type="number"
        error={errors.year && touched.year}
        helperText={errors.year && touched.year && errors.year}
      />

      <TextField
        id="trailer"
        label="Trailer Embed-URL"
        variant="outlined"
        name="trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        error={errors.trailer && touched.trailer}
        helperText={errors.trailer && touched.trailer && errors.trailer}
      />

      <Button variant="outlined" type="submit">
        Save Changes
      </Button>
    </form>
  );
};
