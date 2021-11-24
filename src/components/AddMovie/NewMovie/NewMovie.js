import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

const formValidationSchema = yup.object({
  name: yup.string().required(),
  pic: yup.string().min(5).required(),
  rating: yup.number().min(0).max(10).required(),
  summary: yup.string().min(20).required(),
  year: yup.number().min(1890).required(),
  trailer: yup.string().min(6).required(),
});

export const NewMovie = ({ onCancel }) => {
  const history = useHistory();

  //   const [name, setName] = useState("");
  //   const [pic, setPic] = useState("");
  //   const [summary, setSummary] = useState("");
  //   const [rating, setRating] = useState("");
  //   const [year, setYear] = useState("");
  //   const [trailer, setTrailer] = useState("");

  // destructuring handleSubmit, values, handleChange, handleBlur, errors, touched;
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        pic: "",
        summary: "",
        rating: "",
        year: "",
        trailer: "",
      },
      //   validate: validateForm,
      validationSchema: formValidationSchema,
      onSubmit: (newMovie) => {
        sendDataToParent(newMovie);
      },
    });

  const sendDataToParent = (newMovie) => {
    // const newMovie = {
    //   name,
    //   pic,
    //   rating,
    //   summary,
    //   year,
    //   trailer,
    // };
    // console.log(newMovie);
    // onSaveMovieData(newMovie);
    // 1.Method - POST
    // 2.Body - data & JSON
    // 3.Headers -JSON
    // async function NewMovie() {
    //   const data = await fetch(
    //     "https://616d506937f997001745d992.mockapi.io/martinscorses/",
    //     {
    //       method: "POST",
    //       body: JSON.parse(JSON.stringify(newMovie)),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   await data(() => history.push("/"));
    // }
    // NewMovie();
    fetch("https://616d506937f997001745d992.mockapi.io/martinscorses/", {
      method: "POST",
      body: JSON.parse(JSON.stringify(newMovie)),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/"));
  };

  return (
    <form onSubmit={handleSubmit} className="addmovie-form">
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
        summary
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
        id="rating"
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

      <Button type="submit" color="primary" variant="outlined">
        Add Movie
      </Button>
      <Button variant="outlined" onClick={onCancel}>
        Cancel
      </Button>
    </form>
  );
};
