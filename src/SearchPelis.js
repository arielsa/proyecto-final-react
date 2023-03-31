import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import './SearchPelis.css'

function SearchPelis (props){
    const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "c495d91754fd32409ac24c38c41473ca";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";


    const [valorBusqueda, setValorBusqueda] = useState('')
    const [valorResultado, setValorResultado]=useState('')

    const onSearchValue = (evento) => {
        console.log(evento.target.value);
        //props.seleccionador(props.busqueda(evento.target.value));
        //props.seleccionador(props.busqueda)
        setValorBusqueda(evento.target.value);
        fetchpelisSearch();
        props.seleccionador(valorResultado);
        console.log(valorResultado);
    }

    let encoded = valorBusqueda;


    const fetchpelisSearch = async () => {
        const {data:{results},} = await axios.get(`${API_URL}/search/movie`,
        {params: {api_key: API_KEY, language:'es', query:encoded },} 
        )
        setValorResultado(results);   
    }

    useEffect(() => {
        fetchpelisSearch();        
      }, []);

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
                 
            />
        </div>
    )

}

export {SearchPelis};