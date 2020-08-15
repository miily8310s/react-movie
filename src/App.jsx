import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieDetail } from "./components/moviedetail/MovieDetail";
import { Header } from "./components/Header";

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={MovieDetail} exact />
      </Switch>
    </main>
  );
}

export default App;
