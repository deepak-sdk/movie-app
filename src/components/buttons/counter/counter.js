// hook is function - starts with use keyword
import React, { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Badge from '@mui/material/Badge';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
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

    const history = useHistory()

    const handleEditHistory = () => {
        history.push('./edit')
    }
    return (
        <div className="counter-container">
            <Badge badgeContent={like} color="primary">
                <button
                    className="likes-dislikes"
                    onClick={() => {
                        setLike(like + 1);
                    }}
                >
                    <span role="img" aria-label="like-button">
                        <ThumbUpIcon />
                    </span>
                </button>
            </Badge>


            <Badge badgeContent={dislike} color="primary">
                <button
                    className="likes-dislikes"
                    onClick={() => {
                        setDislike(dislike + 1);
                    }}
                >
                    <span role="img" aria-label="dislike-button">
                        {" "}
                        <ThumbDownIcon />
                    </span>
                </button>
            </Badge>


            <button onClick={handleEditHistory}
                className="likes-dislikes" >
                <EditIcon />
            </button>



            <button
                className="likes-dislikes">
                <DeleteIcon />
            </button>



        </div>
    );
}
// editUserForm.style.display =
//     editUserForm.style.display === "block" ? "none" : "block";
