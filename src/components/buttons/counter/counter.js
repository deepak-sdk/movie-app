// hook is function - starts with use keyword
import React, { useState } from "react";
import './counter.css'

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
            <button className="likes-dislikes"
                onClick={() => {
                    setLike(like + 1);
                }}>
                👍{like}{" "}
            </button>

            <button className="likes-dislikes"
                onClick={() => {
                    setDislike(dislike + 1);
                }}>
                👎{dislike}
            </button>
        </div>
    );
}
// editUserForm.style.display =
//     editUserForm.style.display === "block" ? "none" : "block";