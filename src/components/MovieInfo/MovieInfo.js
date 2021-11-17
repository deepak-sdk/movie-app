import React from "react";
import { useParams } from "react-router";
import "./MovieInfo.css";

export const MovieInfo = ({ martinscorses }) => {
    const { id } = useParams();
    const movie = martinscorses[id];

    const styles = {
        color: movie.rating < 8 ? "crimson" : "green",
    };
    return (
        <>
            <iframe
                width="96%"
                height="560"
                src={movie.trailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <div className="movie-info-container">

                <div className="movie-info-name-rating">
                    <h1 className="movie-info-name">{movie.name}</h1>
                    <p className="movie-info-rating" style={styles}>
                        {movie.rating}⭐
                    </p>
                </div>
                <p className="movie-info-summary">{movie.summary}</p>
            </div>
        </>
    );
};
