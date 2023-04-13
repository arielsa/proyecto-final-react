
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


//const urlImage = 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg';
//const urlImage2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4lZo5jSUNnXP7KX1S98SkLTjEP7E_3HByA&usqp=CAU';

// const pelisPopulares = [
//   {id:1, title:'peli 1' , url:urlImage, overview:'esta pelis bla bla bla', rank:null},
//   {id:2, title:'peli 2 ', url:urlImage, overview:'esta pelis bla bla bla', rank:null },
//   {id:3, title:'peli 3' , url:urlImage, overview:'esta pelis bla bla bla', rank:null},
//   {id:4, title:'peli 4' , url:urlImage, overview:'esta pelis bla bla bla', rank:null},
//   {id:5, title:'peli 5' , url:urlImage, overview:'esta pelis bla bla bla', rank:null},
// ]

//const pelisLanzamientos = [
//  {id:1, title:'peli 1' , url:urlImage2, overview:'esta pelis bla bla bla', rank:null},
//  {id:2, title:'peli 2 ', url:urlImage2, overview:'esta pelis bla bla bla', rank:null },
//  {id:3, title:'peli 3' , url:urlImage2, overview:'esta pelis bla bla bla', rank:null},
//  {id:4, title:'peli 4' , url:urlImage2, overview:'esta pelis bla bla bla', rank:null},
//  {id:5, title:'peli 5' , url:urlImage2, overview:'esta pelis bla bla bla', rank:null},
//]
//prueba de consumo de API:

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
    console.log(results);   
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



  /////////////////////////////busqueda y captura:

  // const [busqueda, setBusqueda]=useState([])
  // const [busquedaAux, setBusquedaAux] = useState('a')

  // let valor='fatal'
  // async function fetchpelisBuscadas () {
    
  //   const {data:{results},} = await axios.get(`${API_URL}/search/upcoming`,
  //   {params: {api_key: API_KEY, language:'es', query:valor },} 
  //   )
  //   setBusqueda(results);   
  // }
  const [estadoBusqueda, setEstadoBusqueda ] = useState('')
  const [valorBusqueda, setValorBusqueda] = useState('')
  const [valorResultado, setValorResultado]=useState([])

  const onSearchValue = (evento) => {
  // console.log(evento.target.value);
    //props.seleccionador(props.busqueda(evento.target.value));
    //props.seleccionador(props.busqueda)
    setRenderApi(true);
    setValorBusqueda(evento.target.value);
    fetchpelisSearch();
    valorResultado.length > 1 ?  seleccionador(valorResultado) : setEstadoBusqueda ('No se encontro, vuelva a intentarlo');
    valorResultado.length < 1 ?  seleccionador(valorResultado) : setEstadoBusqueda ('')
    //console.log(valorResultado);         
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

  /////////////////selecccionador de lista
  const [listaSelecionada, setListaSeleccionada]=useState(pelisPopulares)

  let pelisSeleccionadas = listaSelecionada;

  function seleccionador (seleccion){
    setListaSeleccionada(seleccion); 
  }

  ////////////////seleccionador de modo de visualizacion
  const [modoDeLista, setModoDeListado]= useState('sin-detalle')
  const [rankeado, setRankeado] = useState('false')
  const [btnEliminarListaPropia, setBtnEliminarListaPropia] = useState('false')

  function SelecionarModoDeVista (modo){
            setModoDeListado(modo)
  }

  let visibilidad = modoDeLista;
  /////////////////////////////////////////creando en storage lista aux
  const [formAux, setFormAux]=useState(false)///prender/apagar <<<<modal
  const [peliAGuardar, setPeliAGuardar] = useState([])
  const [ranking, setRanking] = useState ();
  const [listAux,setListAux] = useState([]);
  const [listVolverVer, set] = useState([]);

  
  function CargarListVolverVer (objeto){
    listVolverVer.push(objeto)
    console.log(listVolverVer);
  }
  function CargarListAux (objeto){
    listAux.push(objeto)
  }
////////////////////////////
  const [renderApi,setRenderApi] = useState(true);
  
/////////////////////////filtrar introduccion de objeto en un array

  function filtroDeIntroduccion(objetoBuscado,array){
    
    let objetoEncontrado = array.find(function(objeto) {
      return objeto.id === objetoBuscado.id 
    });

    if (objetoEncontrado) {      
      //console.log('Objeto encontrado');
      return true
    } else {
      //console.log('Objeto no encontrado');
      return false
    }
  }
////////////////////////////////////////////////////////return
  return (
    <React.Fragment>

    <div>{/*menu header */}
      <Menu2 listAux={listAux} listVolverVer={listVolverVer} 
      setRenderApi={setRenderApi} seleccionador={seleccionador}  
      populares={pelisPopulares}  enCartelera={pelisNowPaying}      
      setRankeado={setRankeado} setBtnEliminarListaPropia={setBtnEliminarListaPropia} />

    <SearchPelis setRenderApi={setRenderApi} setBtnEliminarListaPropia = {setBtnEliminarListaPropia}
    seleccionador={seleccionador} onSearchValue={onSearchValue} 
    pelisTrending={pelisTrending}/>

    <EstadoDeBusqueda estado={estadoBusqueda} />
    
    <SeleccionDeCarga SelecionarModoDeVista={SelecionarModoDeVista} />

    <ImputOutPutPrueba></ImputOutPutPrueba>   

    </div>

    <FormAux 
    listVolverVer={listVolverVer} CargarListVolverVer={CargarListVolverVer}
    renderApi={renderApi} pelisSeleccionadas={pelisSeleccionadas}
    filtroDeIntroduccion={filtroDeIntroduccion} btnEliminarListaPropia={btnEliminarListaPropia}
    listAux={listAux} CargarListAux={CargarListAux} 
    setRanking={setRanking} ranking={ranking} formAux={formAux} 
    setFormAux={setFormAux} peliAGuardar={peliAGuardar}  />

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
