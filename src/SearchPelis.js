import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import './SearchPelis.css'

function SearchPelis (props){

    const [valorBusqueda, setValorBusqueda] = useState('')

    const onSearchValue = (evento) => {
        console.log(evento.target.value);
        setValorBusqueda(evento.target.value);
    }

    return(    
        <div className="input-group mb-3 m-2" >
            <div className="input-group-prepend">
                <button className="btn btn-outline-primary" type="button">Random</button>
            </div>
            <input 
                onChange={onSearchValue}   
                className="form-control PelisSearch " 
                placeholder="buscar pelicula"  
                aria-describedby="basic-addon1"
                value={valorBusqueda}
            />
        </div>
    )

}

export {SearchPelis};