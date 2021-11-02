import React from 'react';
import Movies from "../Movie/movies";
import './movieList.css'

export default function MovieList({ martinscorses }) {

    return (
        <section className="movielist-section">
            {martinscorses.map(({ name, pic, summary, rating, year }) => (
                <Movies
                    name={name}
                    pic={pic}
                    summary={summary}
                    rating={rating}
                    year={year}
                />
            ))}
        </section>
    )
}
