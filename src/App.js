
import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
import { ImputOutPutPrueba } from './ImputOutPutPrueba';

///////////importacion de componentes
import './App.css';
import { Menu2 } from './Menu.js';
import { SearchPelis } from './SearchPelis.js'; 
import { PelisListDetalle } from './PelisListDetalle.js';
import {Peli} from './Peli.js';
import { PelisVistasList } from './PelisVistasList.js';
import { ApiList } from './ApiList.js';
import { Ranqueador } from './Ranqueador.js';
import {SeleccionDeCarga} from './SeleccionDeCarga.js'
import { EstadoDeBusqueda } from './EstadoDeBusqueda.js';
import { FormAux } from './FormAux.js';


const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "c495d91754fd32409ac24c38c41473ca";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";


function App() {

  //pelis populares:

  const [pelisPopulares, setpelisPopulares] = useState([]);

  const fetchpelisPopulares = async () => {
    const {data:{results},} = await axios.get(`${API_URL}/movie/top_rated`,
    {params: {api_key: API_KEY, language:'es' },}
    )
    setpelisPopulares(results);      
  }
  // en cartelera:

  const [pelisNowPaying, setpelisNowPaying] = useState([]);

  const fetchpelisNowPaying = async () => {
    const {data:{results},} = await axios.get(`${API_URL}/movie/upcoming`,
    {params: {api_key: API_KEY, language:'es' },} 
    )
    setpelisNowPaying(results);   
  }

  // trending:
  const [pelisTrending, setpelisTrending] = useState([]);

  const fetchpelisTrending = async () => {
    const {data:{results},} = await axios.get(`${API_URL}/trending/movie/day`,
    {params: {api_key: API_KEY, language:'es' },}
    )
    setpelisTrending(results);       
  }
//buscador:
  const [estadoBusqueda, setEstadoBusqueda ] = useState('')
  const [valorBusqueda, setValorBusqueda] = useState('')
  const [valorResultado, setValorResultado]=useState([])

  const onSearchValue = (evento) => {
    setRenderApi(true);
    setValorBusqueda(evento.target.value);
    fetchpelisSearch();
    valorResultado.length > 1 ?  seleccionador(valorResultado) : setEstadoBusqueda ('No se encontro, vuelva a intentarlo');
    valorResultado.length < 1 ?  seleccionador(valorResultado) : setEstadoBusqueda ('')       
  } 
  let encoded = valorBusqueda;

  const fetchpelisSearch = async () => {
      const {data:{results},} = await axios.get(`${API_URL}/search/movie`,
      {params: {api_key: API_KEY, language:'es', query:encoded },} 
      )
      setValorResultado(results);   
  }

  /////////////////queue
  useEffect(() => {
    fetchpelisPopulares();
    fetchpelisTrending();
    fetchpelisNowPaying();
    fetchpelisSearch();
    
  }, []);

  /////////////////selecccionador de lista para rendirizar
  const [listaSelecionada, setListaSeleccionada]=useState(pelisPopulares)

  let pelisSeleccionadas = listaSelecionada;

  function seleccionador (seleccion){
    setListaSeleccionada(seleccion);     
  }

  ////////////////seleccionador de modo de visualizacion, con detalle, lista propia, ranqueador
  const [modoDeLista, setModoDeListado]= useState('sin-detalle');
  const [rankeado, setRankeado] = useState('false');
  const [btnEliminarListaPropia, setBtnEliminarListaPropia] = useState('false'); 
  const [persistencia, setPersistencia] = useState('1');//1 volatil, 2 localStorage, 3 fireBase.

  function SelecionarModoDeVista (modo){
            setModoDeListado(modo)
  }

  let visibilidad = modoDeLista;
  /////////////////////////////////////////
  const [formAux, setFormAux]=useState(false)///prender/apagar <<<<modal
  const [peliAGuardar, setPeliAGuardar] = useState([])
  const [ranking, setRanking] = useState ();//guardar ranking
  //listasvolatiles
  const [listAux,setListAux] = useState([]);////lista proxima a ver
  const [listVolverVer, setVolverVer] = useState([]);
  const [listVisto, setVisto] = useState([]);
  //listas en storage 
  const [storagePAV, setStoragePAV] = useState ([]);
  const [storageV, setStorageV] = useState ([]);
  const [storageVV, setStorageVV] = useState ([]);
  

////////////////////////////////////////////////funciones de carga de listas
    function CargarListVisto (objeto){
    listVisto.push(objeto)    
    }
  function CargarListVolverVer (objeto){
    listVolverVer.push(objeto)    
  }
  function CargarListAux (objeto){
    listAux.push(objeto)
  }

  function cargarStoragePAV(objeto){
    storagePAV.push(objeto);
    //let objetoSting = JSON.stringify(objeto);
    let listaEnStoragePAV = JSON.parse(localStorage.getItem('listaPAV_V4'));
    listaEnStoragePAV.push(objeto);
    localStorage.removeItem('listaPAV_V4')
    localStorage.setItem('listaPAV_V4',JSON.stringify(listaEnStoragePAV))
  }

  function cargarStorageV(objeto){
    storageV.push(objeto);
    //let objetoSting = JSON.stringify(objeto);
    let listaEnStorageV = JSON.parse(localStorage.getItem('listaV_V4'));
    listaEnStorageV.push(objeto);
    localStorage.removeItem('listaV_V4')
    localStorage.setItem('listaV_V4',JSON.stringify(listaEnStorageV))
  }
  function cargarStorageVV(objeto){
    storageVV.push(objeto);
    //let objetoSting = JSON.stringify(objeto);
    let listaEnStorageVV = JSON.parse(localStorage.getItem('listaVV_V4'));
    listaEnStorageVV.push(objeto);
    localStorage.removeItem('listaVV_V4')
    localStorage.setItem('listaVV_V4',JSON.stringify(listaEnStorageVV))
  }



//////////////////////////////////crear listas en storage si no existen:
let listaEnStoragePAV = JSON.parse(localStorage.getItem('listaPAV_V4'));
let listaEnStorageV= JSON.parse(localStorage.getItem('listaV_V4'));
let listaEnStorageVV= JSON.parse(localStorage.getItem('listaVV_V4'));
let [selecStorageBorrar, setSelecStorageBorrar] = useState('');

if (persistencia==='2'){
  //console.log('persistencia 2');
  if (!listaEnStoragePAV){
    localStorage.setItem('listaPAV_V4','[]')      
    //console.log('camibio de lista a storage ');
  } 
  if (!listaEnStorageV){
    localStorage.setItem('listaV_V4','[]')      
    //console.log('camibio de lista a storage ');
  } 
  if (!listaEnStorageVV){
    localStorage.setItem('listaVV_V4','[]')      
    //console.log('camibio de lista a storage ');
  } 
}



////////////////////////////renderizar api o no.

  const [renderApi,setRenderApi] = useState(true);
  
/////////////////////////filtrar introduccion de objeto en un array

  function filtroDeIntroduccion(objetoBuscado,array){
    
    let objetoEncontrado = array.find(function(objeto) {
      return objeto.id === objetoBuscado.id 
    });
    if (objetoEncontrado) {     
      return true
    } else {
      return false
    }
  }
////////////////////////////////////////////////////////return
  return (
    <React.Fragment>

    <div>{/*menu header */}
      <Menu2 listAux={listAux} listVolverVer={listVolverVer}
      listVisto={listVisto} persistencia = {persistencia}
      storagePAV = {storagePAV} listaEnStoragePAV = {listaEnStoragePAV }
      listaEnStorageVV = {listaEnStorageVV }
      listaEnStorageV = {listaEnStorageV }
      storageV = {storageV} storageVV = {storageVV} 
      setRenderApi={setRenderApi} seleccionador={seleccionador}  
      populares={pelisPopulares}  enCartelera={pelisNowPaying}      
      setRankeado={setRankeado} setBtnEliminarListaPropia={setBtnEliminarListaPropia}
      setSelecStorageBorrar={setSelecStorageBorrar} />

    <SearchPelis setRenderApi={setRenderApi} setBtnEliminarListaPropia = {setBtnEliminarListaPropia}
    seleccionador={seleccionador} onSearchValue={onSearchValue} 
    pelisTrending={pelisTrending}/>

    <EstadoDeBusqueda estado={estadoBusqueda} />
    
    <SeleccionDeCarga SelecionarModoDeVista={SelecionarModoDeVista} 
    persistencia={persistencia} setPersistencia= {setPersistencia} 
    listaEnStoragePAV = {listaEnStoragePAV} storagePAV = {storagePAV}
    listaEnStorageV = {listaEnStorageV} storageV = {storageV}
    listaEnStorageVV = {listaEnStorageVV} storageVV = {storageVV}
    listVolverVer={listVolverVer} setVolverVer = {setVolverVer} 
    listAux={listAux} setListAux = {setListAux} 
    listVisto={listVisto} setVisto = {setVisto} 
    seleccionador = {seleccionador} setStoragePAV = {setStoragePAV}/>

    <ImputOutPutPrueba></ImputOutPutPrueba>   

    </div>

    <FormAux 
    cargarStorageVV = {cargarStorageVV}
    cargarStorageV = {cargarStorageV}
    selecStorageBorrar = {selecStorageBorrar}
    listVolverVer={listVolverVer} CargarListVolverVer={CargarListVolverVer}
    listVisto={listVisto} CargarListVisto={CargarListVisto}
    renderApi={renderApi} pelisSeleccionadas={pelisSeleccionadas}
    filtroDeIntroduccion={filtroDeIntroduccion} btnEliminarListaPropia={btnEliminarListaPropia}
    listAux={listAux} CargarListAux={CargarListAux} 
    setRanking={setRanking} ranking={ranking} formAux={formAux} 
    setFormAux={setFormAux} peliAGuardar={peliAGuardar} 
    persistencia={persistencia} setPersistencia= {setPersistencia}
    storagePAV={storagePAV} setStoragePAV = {setStoragePAV}
    storageV={storageV} setStorageV = {setStorageV}
    storageVV={storageVV} setStorageVV = {setStorageVV}
    cargarStoragePAV = {cargarStoragePAV}
    />

    <div> 
      {/*renderizado de pelis */}
      <PelisListDetalle visibilidad={visibilidad}> 
        {pelisSeleccionadas.map (peli =>
          (<Peli setFormAux={setFormAux} setRanking={setRanking}  
            setPeliAGuardar={setPeliAGuardar} key={peli.id} rankeado={rankeado}
            id={peli.id} title={peli.title} ranking = {peli.ranking}
            url={ renderApi ? `${URL_IMAGE + peli.poster_path}`: peli.url } 
            overview={peli.overview}/>))
        }
      </PelisListDetalle>

    <ApiList renderApi={renderApi} 
    setPeliAGuardar={setPeliAGuardar} 
    setRanking={setRanking} 
    setFormAux={setFormAux} 
    pelis={pelisSeleccionadas}  
    visibilidad={visibilidad} />
    </div>

    {/*rendreizador de objetos locales */}


    
    </React.Fragment>
  );
}

export default App;
