import React from  'react'
import './Peli.css'
//import {Ranqueador} from './Ranqueador.js'

const urlImage = 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg';

function Peli (props){

    let puntitos= ''

    for (let index = 0; index < 4; index++) {
        puntitos =puntitos+ '0'
        
    }
    const estrellas = []
    for (let index = 0; index < props.ranking+1; index++) {
        estrellas.push (index);        
    }//props.rankeado



    return(    
    <React.Fragment>


        
        <li>
            <div className="container card m-3 m-lg-5">
                <div className="row m-3">                    
                        <div className="col-md-6 poster-cont">
                            <img className="poster" src={props.url}/>{/*  URLImage+"/"props.poster_path  */ }
                        </div>
                        <div className="col-md-6 ">
                            <h2 className="text-center">{props.title  }</h2>
                            
                            <div className={props.rankeado? "stars  text-center " : 'stars  text-center inactive'}>
                                {estrellas.map((estrella, index) => (
                                    <i
                                    key={index}
                                    className={
                                        "fa-sharp fa-solid fa-star stars active tamaño"                            
                                    }                                    
                                    ></i>
                                ))}
                            </div> 

                            <p className="text-center" >{props.overview}</p>

                            <div>
                                <h2><span onClick={ () => {
                                    props.setRanking(0)
                                    props.setPeliAGuardar(props);
                                    props.setFormAux(true);                                  
                                } }  > <i className="fas fa-window-restore icon  "></i></span></h2>
                            </div>
                            
                        </div>  
                                                    
                </div>
                
            </div>
            

        </li>

    </React.Fragment>

    )



}
export {Peli}