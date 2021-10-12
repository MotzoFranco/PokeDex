import React, {useEffect, useState}from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function App() {

  const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=1"
  const [poke, setPoke] = useState()
  const pokeApi = async () => {
    const response = await fetch(url)
    console.log(response.statusText)
    const responseJSON = await response.json()
    setPoke(responseJSON)
  }

  useEffect(() => {
    pokeApi()
  }, [])
  
  const [pokeview, setPokeview] = useState()
  const pokeApiview = async () => {
    const pokemon = await fetch('${url}')
    console.log(pokemon.statusText)
    const pokemonJSON = await pokemon.json()
    setPokeview(pokemonJSON)
  }

  useEffect(() => {
    pokeApiview()
  }, [])

  return (
    <div>
    <h1>Pokedex</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
     {poke?.results?.map(poke=>(
       <tr>
         <td>{poke.name}</td>
         <td><Button variant="outline-primary" value="get">Ver</Button>{' '}</td>
       </tr>
     ))
    }
    </tbody>
    </table>
    </div>
  );
}

export default App;
