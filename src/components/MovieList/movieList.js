import React from "react";
import Movies from "../Movie/movies";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router";
import "./movieList.css";

export function MovieList({ martinscorses, setMovies }) {
	const history = useHistory();

	const handleEditHistory = () => {
		history.push("./edit");
	};


	return (
		<section className="movielist-section">
			{martinscorses.map(({ name, pic, summary, rating, year }, index) => (
				<Movies
					id={index}
					key={index}
					name={name}
					pic={pic}
					summary={summary}
					rating={rating}
					year={year}
					editButton={
						<EditIcon
							onClick={handleEditHistory}
							className="likes-dislikes"
						></EditIcon>
					}
					deleteButton={
						<DeleteIcon
							className="likes-dislikes"
							onClick={() => {
								setMovies(martinscorses.filter((mv, ind) => ind != index));
							}}
						></DeleteIcon>
					}
				/>
			))}
		</section >
	);
}
