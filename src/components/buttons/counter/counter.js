// hook is function - starts with use keyword
import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Badge from "@mui/material/Badge";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router";
import "./counter.css";

export default function Counter() {
    // let like = 10;
    // const [state, setState] = useState(IntialValue)
    // state = current scenario = current data
    // state = variable , setState = React state is changed -> re-render(updating)
    // render = showing on the screen;

    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    const history = useHistory();

    const handleEditHistory = () => {
        history.push("./edit");
    };
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
            <div class="edit-delete-button">
                <EditIcon
                    onClick={handleEditHistory}
                    className="likes-dislikes"
                ></EditIcon>

                <DeleteIcon className="likes-dislikes"></DeleteIcon>
            </div>
        </div>
    );
}
// editUserForm.style.display =
//     editUserForm.style.display === "block" ? "none" : "block";
