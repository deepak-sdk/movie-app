import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useHistory } from "react-router";
import "./MovieInfo.css";

export const MovieInfo = () => {
    const { id } = useParams();
    // const movie = martinscorses[id];

    const history = useHistory();

    const [movie, setMovie] = useState({});
    useEffect(() => {
        fetch(`https://616d506937f997001745d992.mockapi.io/martinscorses/${id}`)
            .then((data) => data.json())
            .then((mv) => setMovie(mv));
    }, [])

    const styles = {
        color: movie.rating < 8 ? "crimson" : "green",
    };
    return (
        <div className="movie-info-container">
            <div className="youtube-video">
                <iframe
                    width="100%"
                    height="450"
                    src={movie.trailer}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>

            <div className="movie-info">
                <div className="movie-info-name-rating">
                    <h1 className="movie-info-name">{movie.name}</h1>
                    <p className="movie-info-rating" style={styles}>
                        {movie.rating}⭐
                    </p>
                </div>
                <div className="movie-info-summary-button">
                    <p className="movie-info-summary">{movie.summary}</p>

                    <Button
                        className="goback-button"
                        variant="outlined"
                        onClick={() => {
                            history.goBack();
                        }}
                        startIcon={<ArrowBackIcon />}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </div>
    );
};
