import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

export const NewMovie = ({ onCancel }) => {
    const history = useHistory();

    const [name, setName] = useState("");
    const [pic, setPic] = useState("");
    const [summary, setSummary] = useState("");
    const [rating, setRating] = useState("");
    const [year, setYear] = useState("");
    const [trailer, setTrailer] = useState("");

    const sendDataToParent = (e) => {
        e.preventDefault();
        const newMovie = {
            name,
            pic,
            rating,
            summary,
            year,
            trailer,
        };

        // onSaveMovieData(newMovie);


        // 1.Method - POST
        // 2.Body - data & JSON
        // 3.Headers -JSON

        fetch("https://616d506937f997001745d992.mockapi.io/martinscorses/", {
            method: 'POST',
            body: JSON.stringify(newMovie),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => history.push("/"))
    };

    return (
        <>
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

            <Button onClick={sendDataToParent} variant="outlined">
                Add Movie
            </Button>
            <Button variant="outlined" onClick={onCancel}>
                Cancel
            </Button>
        </>
    );
};
