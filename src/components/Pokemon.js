import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Pokemon = () => {

    const {name} = useParams()

    const [nombre, setNombre] = useState({})

    const obtenerNombre = async () =>{
        const datos = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        setNombre(datos.data)
    }

    useEffect(() => { 
        obtenerNombre()
    })

    return (
        <div>
            <p>Soy una prueba y soy {nombre.name}</p>
        </div>
        )
}

export default Pokemon;