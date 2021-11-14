import React from "react";
import Movies from "../Movie/movies";

import "./movieList.css";

export function MovieList({ martinscorses }) {

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
				/>
			))}
		</section>
	);
}
