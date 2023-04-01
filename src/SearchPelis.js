import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import './SearchPelis.css'

function SearchPelis (props){

    const trendingClickeado = ()=>{   
        props.setRenderApi(true);    
        props.seleccionador(props.pelisTrending)
    }

  
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