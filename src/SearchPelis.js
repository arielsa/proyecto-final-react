import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import './SearchPelis.css'

function SearchPelis (props){
    const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "c495d91754fd32409ac24c38c41473ca";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";


    const [pelisTrending, setpelisTrending] = useState([]);

    const fetchpelisTrending = async () => {
      const {data:{results},} = await axios.get(`${API_URL}/trending/movie/day`,
      {params: {api_key: API_KEY, language:'es' },}
      )
      setpelisTrending(results);
      
      
         
    }

    const trendingClickeado = ()=>{
       
        props.seleccionador(pelisTrending)
    }

    useEffect(() => {
        fetchpelisTrending();
      }, []);

    return(    
        <div className="input-group mb-3 m-2" >
            <div className="input-group-prepend">
                <button className="btn btn-outline-primary" type="button"
                onClick={trendingClickeado} 
                >trending top</button>
            </div>
            <input 
                onChange={props.onSearchValue}   
                className="form-control PelisSearch " 
                placeholder="buscar pelicula"  
                aria-describedby="basic-addon1"                 
            />
            
        </div>
    )

}

export {SearchPelis};