import React, { useState } from "react";
import "./App.css";
import { MovieList } from "./components/MovieList/movieList";
import { Header } from "./components/header/header";
import { AddMovie } from "./components/AddMovie/AddMovie";
import { Switch, Route, Redirect } from "react-router-dom";
import { EditMovie } from "./components/EditMovie/EditMovie";
import { TodoList } from "./components/Todo/TodoList";
import { MovieInfo } from "./components/MovieInfo/MovieInfo";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function App() {

  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });




  // const addMovie = (data) => {
  //   // copy the movies list and add new movie
  //   // setMovies([...movies, data]);
  //   setMovies((prevMovie) => {
  //     return [...prevMovie, data];
  //   });
  // };




  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={3}
        style={{ borderRadius: "0px", minHeight: "100vh" }}
        className="App"
      >
        <Header setMode={setMode} mode={mode} />
        {/* <MartinScorsese /> */}
        <Switch>
          {/* Route matches by sub-string */}

          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/addmovies">
            <Redirect to="/addmovie" />
          </Route>
          <Route path="/addmovie">
            <AddMovie />
          </Route>
          <Route path="/todo">
            <TodoList />
          </Route>
          <Route path="/movie-edit/:id">
            <EditMovie />
          </Route>
          {/* UseHistory */}
          <Route path="/movie-info/:id">
            <MovieInfo />
          </Route>
          <Route path="**">
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </Paper>
    </ThemeProvider>
  );
}

export default App;


// fetch("https://616d506937f997001745d992.mockapi.io/martinscorses/" + id, { method: 'DELETE' })