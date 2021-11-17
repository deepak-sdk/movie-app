// hook is function - starts with use keyword
import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Badge from "@mui/material/Badge";
import "./counter.css";

export default function Counter() {
  // let like = 10;
  // const [state, setState] = useState(IntialValue)
  // state = current scenario = current data
  // state = variable , setState = React state is changed -> re-render(updating)
  // render = showing on the screen;

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div className="counter-container">
      <div class="like-dislike-button">
        <Badge badgeContent={like} color="primary">
          <ThumbUpIcon
            className="likes-dislikes"
            onClick={() => {
              setLike(like + 1);
            }}
          ></ThumbUpIcon>
        </Badge>

        <Badge badgeContent={dislike} color="error">
          <ThumbDownIcon
            className="likes-dislikes"
            onClick={() => {
              setDislike(dislike + 1);
            }}
          ></ThumbDownIcon>
        </Badge>
      </div>
    </div>
  );
}
// editUserForm.style.display =
//     editUserForm.style.display === "block" ? "none" : "block";
