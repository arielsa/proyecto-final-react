
import './App.css';
import { Menu } from './Menu.js';
import { SearchPelis } from './SearchPelis.js';
import React from 'react';
import { PelisList } from './PelisList';
import {Peli} from './Peli';
import { PelisVistasList } from './PelisVistasList';
import { ApiList } from './ApiList';

const urlImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaMa3ir58raQ9jobi4_LIFoc8dBQQDGiJyA&usqp=CAU';

const pelis = [
  {id:1, title:'peli 1' , url:urlImage, },
  {id:2, title:'peli 2 ' , url:urlImage, },
  {id:3, title:'peli 3' , url:urlImage, },
  {id:4, title:'peli 4' , url:urlImage, },
  {id:5, title:'peli 5' , url:urlImage, },
]

function App() {
  return (
    <React.Fragment>

    <Menu/>

    <SearchPelis/>

    {/* <PelisVistasList/> */}

    <PelisList> 
      {pelis.map (peli =>
        (<Peli key={peli.id} title={peli.title} url={peli.url}/>))
      }
    </PelisList>

    <ApiList pelis={pelis} />

    
    </React.Fragment>
  );
}

export default App;
