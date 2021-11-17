import React, { useState } from "react";
import { useParams, useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./EditMovie.css";

export const EditMovie = ({ martinscorses, setMovies }) => {
	const { id } = useParams();
	const movie = martinscorses[id];

	const history = useHistory();

	const [name, setName] = useState(movie.name);
	const [pic, setPic] = useState(movie.pic);
	const [summary, setSummary] = useState(movie.summary);
	const [rating, setRating] = useState(movie.rating);
	const [year, setYear] = useState(movie.year);
	const [trailer, setTrailer] = useState(movie.trailer);

	const editMovie = (e) => {
		e.preventDefault();
		const updatedMovie = {
			name,
			pic,
			rating,
			summary,
			year,
			trailer,
		};

		// Swaping data
		console.log(updatedMovie);

		const copyMovieList = [...martinscorses];
		copyMovieList[id] = updatedMovie;
		setMovies(copyMovieList);
		history.push("/");
	};
	return (
		<div className="edit-movie-input-container">
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

			<Button variant="outlined" onClick={editMovie}>
				Save Changes
			</Button>
		</div>
	);
};
