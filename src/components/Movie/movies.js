import React, { useState } from "react";
import Counter from "../buttons/counter";
import Card from "@mui/material/Card";
import InfoIcon from "@mui/icons-material/Info";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useHistory } from "react-router";
import "./movies.css";

export default function Movies({
  name,
  pic,
  summary,
  rating,
  year,
  id,
  editButton,
  deleteButton,
}) {
  const [show, setShow] = useState(true);
  const history = useHistory();

  // conditional styling
  const styles = { color: rating > 8 ? "green" : "red" };
  const summaryStyle = { display: show ? "block" : "none" };
  return (
    <Card className="movies-list">
      <CardMedia>
        <img className="movie-poster" src={pic} alt="poster" />
      </CardMedia>

      <div className="movie-content">
        <div className="movie-header">
          <h3 className="movie-name">
            {name} - <small>({year})</small>
          </h3>
          <div className="header-icons">
            <InfoIcon
              onClick={() => {
                history.push("./movie-info/" + id);
                console.log(id);
              }}
            />
            <IconButton
              onClick={() => setShow(!show)}
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </div>
        </div>

        {/* <p className="movie-summary" style={summaryStyle}>{summary}</p> */}
        <div className="rating-summary-details">
          {/* conditional rendering */}
          {show ? (
            <p className="movie-summary" style={summaryStyle}>
              {summary}
            </p>
          ) : (
            ""
          )}
          <span className="movie-rating" style={styles}>
            IMDb : {rating} / 10
          </span>
        </div>

        <div class="edit-delete-button">
          <Counter />
          {editButton}
          {deleteButton}
        </div>
      </div>
    </Card>
  );
}
