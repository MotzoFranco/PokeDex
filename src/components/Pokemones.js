import React, {useEffect, useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
function Pokemones() {

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
  
  // const [pokeview, setPokeview] = useState()
  // const pokeApiview = async () => {
  //   const pokemon = await fetch('${url}')
  //   console.log(pokemon.statusText)
  //   const pokemonJSON = await pokemon.json()
  //   setPokeview(pokemonJSON)
  // }

  // useEffect(() => {
  //   pokeApiview()
  // }, [])

  return (
    <div>
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
         <td>
             <Link to={`pokemon/${poke.name}`}>
               Ver Pokemon
            </Link>
          </td>
       </tr>
     ))
    }
    </tbody>
    </table>
    </div>
  );
}

export default Pokemones;
