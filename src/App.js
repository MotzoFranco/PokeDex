import React, {useEffect, useState}from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Pokemones from "./components/Pokemones";
import Pokemon from "./components/Pokemon";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand><h1>Pokedéx</h1></Navbar.Brand>
    <Nav className="me-auto">
  <Menu></Menu>
    </Nav>
  </Navbar>
        <Switch>
          <Route path={'/pokemons'} component={Pokemones}></Route>
          <Route path={'/pokemon/:name'} component={Pokemon}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
