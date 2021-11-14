import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    let headerTitle = "Martin Scorsese Movies";
    return (
        <div className="header" id="myHeader">
            <div className="header-logo">
                <img
                    className="header-img"
                    src="https://i.pinimg.com/originals/d3/57/72/d35772eec72fce0de6314940db44c069.jpg"
                    alt="martin scorsese"
                />
                <h1 className="header-title">{headerTitle}</h1>
            </div>

            <nav className="nav-options">
                <Link to="/">Home</Link>
                <Link to="/addmovie">Add Movie</Link>
                <Link to="/todo">Todo List</Link>
            </nav>
        </div>
    );
}

export { Header };
