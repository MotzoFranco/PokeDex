import React, {useEffect, useState}from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';

function Menu() {
  return (
      <div>
        <Link to={'/pokemons'}><Button variant="primary">Home</Button>{' '}</Link>
      </div>
  );
}

export default Menu;
