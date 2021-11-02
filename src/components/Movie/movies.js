import React, { useState } from "react";
import Counter from "../buttons/counter/counter";
import "./movies.css";

export default function Movies({ name, pic, summary, rating, year }) {
    const [show, setShow] = useState(true);

    // conditional styling
    const styles = { color: rating > 8 ? "green" : "red" };
    const summaryStyle = { display: show ? "block" : "none" };
    return (
        <div className="movies-list">
            <img className="movie-poster" src={pic} alt="poster" />
            <div className="movie-content">
                <h2 className="movie-name">
                    {name} - <small>({year})</small>
                </h2>

                {/* conditional rendering */}
                {show ? <p className="movie-summary" style={summaryStyle}>{summary}</p> : ""}

                {/* <p className="movie-summary" style={summaryStyle}>{summary}</p> */}
                <button className="hide-show-summary" onClick={() => setShow(!show)}>
                    {show ? "Hide" : "Read"} Description
                </button>

                <strong className="movie-rating" style={styles}>
                    IMDb : {rating} / 10
                </strong>
                <Counter />
            </div>
        </div>
    );
}
