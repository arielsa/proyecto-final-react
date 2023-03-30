
import './App.css';
import { Menu } from './Menu.js';
import { SearchPelis } from './SearchPelis.js';
import React from 'react';
import { PelisList } from './PelisList';
import {Peli} from './Peli';
import { PelisVistasList } from './PelisVistasList';
import { ApiList } from './ApiList';
import { Ranqueador } from './Ranqueador';

const urlImage = 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg';

const pelis = [
  {id:1, title:'peli 1' , url:urlImage, overview:'esta pelis bla bla bla', rank:null},
  {id:2, title:'peli 2 ', url:urlImage, overview:'esta pelis bla bla bla', rank:null },
  {id:3, title:'peli 3' , url:urlImage, overview:'esta pelis bla bla bla', rank:null},
  {id:4, title:'peli 4' , url:urlImage, overview:'esta pelis bla bla bla', rank:null},
  {id:5, title:'peli 5' , url:urlImage, overview:'esta pelis bla bla bla', rank:null},
]

function App() {
  return (
    <React.Fragment> 

    <Menu/>

    <SearchPelis/>
    <Ranqueador/>

    {/* <PelisVistasList/> */}

    <PelisList> 
      {pelis.map (peli =>
        (<Peli key={peli.id} title={peli.title} url={peli.url} overview={peli.overview}/>))
      }
    </PelisList>

    {/* <ApiList pelis={pelis} /> */}

    
    </React.Fragment>
  );
}

export default App;
