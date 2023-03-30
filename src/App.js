
import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';


import './App.css';
import { Menu2 } from './Menu.js';
import { SearchPelis } from './SearchPelis.js'; 
import { PelisListDetalle } from './PelisListDetalle';
import {Peli} from './Peli';
import { PelisVistasList } from './PelisVistasList';
import { ApiList } from './ApiList';
import { Ranqueador } from './Ranqueador';
import {SeleccionDeCarga} from './SeleccionDeCarga'

const urlImage = 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg';
const urlImage2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4lZo5jSUNnXP7KX1S98SkLTjEP7E_3HByA&usqp=CAU';

// const pelisPopulares = [
//   {id:1, title:'peli 1' , url:urlImage, overview:'esta pelis bla bla bla', rank:null},
//   {id:2, title:'peli 2 ', url:urlImage, overview:'esta pelis bla bla bla', rank:null },
//   {id:3, title:'peli 3' , url:urlImage, overview:'esta pelis bla bla bla', rank:null},
//   {id:4, title:'peli 4' , url:urlImage, overview:'esta pelis bla bla bla', rank:null},
//   {id:5, title:'peli 5' , url:urlImage, overview:'esta pelis bla bla bla', rank:null},
// ]

const pelisLanzamientos = [
  {id:1, title:'peli 1' , url:urlImage2, overview:'esta pelis bla bla bla', rank:null},
  {id:2, title:'peli 2 ', url:urlImage2, overview:'esta pelis bla bla bla', rank:null },
  {id:3, title:'peli 3' , url:urlImage2, overview:'esta pelis bla bla bla', rank:null},
  {id:4, title:'peli 4' , url:urlImage2, overview:'esta pelis bla bla bla', rank:null},
  {id:5, title:'peli 5' , url:urlImage2, overview:'esta pelis bla bla bla', rank:null},
]
//prueba de consumo de API:

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "c495d91754fd32409ac24c38c41473ca";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";






function App() {

//prueba de consumo de API:

const [pelisPopulares, setpelisPopulares] = useState([]);

const fetchpelisPopulares = async () => {
  const {data:{results},} = await axios.get(`${API_URL}/movie/popular`,
  {params: {api_key: API_KEY, },}
  )
  setpelisPopulares(results);   
}

const [pelisUpComing, setpelisUpComing] = useState([]);

const fetchpelisUpComing = async () => {
  const {data:{results},} = await axios.get(`${API_URL}/movie/upcoming`,
  {params: {api_key: API_KEY, },}
  )
  setpelisUpComing(results);   
}

useEffect(() => {
  fetchpelisPopulares();
  fetchpelisUpComing();
  console.log(pelisPopulares);
}, []);


const [listaSelecionada, setListaSeleccionada]=useState(pelisLanzamientos)

let pelisSeleccionadas = listaSelecionada;



const [modoDeLista, setModoDeListado]= useState('sin-detalle')

function SelecionarModoDeVista (modo){
          setModoDeListado(modo)
}

const visibilidad = modoDeLista;

function seleccionador (seleccion){
  setListaSeleccionada(seleccion); 
}

  return (
    <React.Fragment>    

    <Menu2  seleccionador={seleccionador}  populares={pelisPopulares} lanzamientos={pelisUpComing} />

    <SearchPelis/>
    
    <SeleccionDeCarga SelecionarModoDeVista={SelecionarModoDeVista} />   

    {/* <Ranqueador/> */}

    {/* <PelisVistasList/> */}

    <PelisListDetalle visibilidad={visibilidad}> 
      {pelisSeleccionadas.map (peli =>
        (<Peli key={peli.id} title={peli.title} url={`${URL_IMAGE + peli.poster_path}`} overview={peli.overview}/>))
      }
    </PelisListDetalle>

    <ApiList pelis={pelisSeleccionadas}  visibilidad={visibilidad} />

    
    </React.Fragment>
  );
}

export default App;
