import React from "react";
import { useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import "./header.css";

function Header({ setMode, mode }) {
    // let headerTitle = "Martin Scorsese Movies";
    const history = useHistory();
    return (

        <div className="header" id="myHeader">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Button variant="text" color="inherit" onClick={() => history.push('/')}>Home</Button>
                    <Button variant="text" color="inherit" onClick={() => history.push('/addmovie')}>Add Movie</Button>
                    <Button variant="text" color="inherit" onClick={() => history.push('/todo')}>Todo List</Button>
                    <Button startIcon={mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />} style={{ marginLeft: 'auto' }} variant="text" color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>{
                        mode === 'light' ? "Dark" : "Light"} mode</Button>
                </Toolbar>

                {/* <div className="header-logo">
                <img
                    className="header-img"
                    src="https://i.pinimg.com/originals/d3/57/72/d35772eec72fce0de6314940db44c069.jpg"
                    alt="martin scorsese"
                />
                <h1 className="header-title">{headerTitle}</h1>
            </div> */}
            </AppBar>
        </div>
    );
}

export { Header };
