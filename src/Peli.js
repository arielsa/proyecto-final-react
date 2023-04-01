import React from  'react'
import './Peli.css'
import {Ranqueador} from './Ranqueador.js'

const urlImage = 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg';

function Peli (props){
               
    return(    
    <React.Fragment>


        
        <li>
            <div className="container card m-3 m-lg-5">
                <div className="row m-3">                    
                        <div className="col-md-6 poster-cont">
                            <img className="poster" src={props.url}/>{/*  URLImage+"/"props.poster_path  */ }
                        </div>
                        <div className="col-md-6 ">
                            <h2 className="text-center">{props.title}</h2>
                            <p className="text-center" >{props.overview}</p>            
                            <div>
                                <h2><span onClick={ () => {
                                    props.setRanking(0)
                                    props.setPeliAGuardar(props);
                                    props.setFormAux(true);                                  
                                } }  > <i className="fas fa-window-restore icon "></i></span></h2>
                            </div>
                            {/* <Ranqueador/> */}
                            
                        </div>  
                                                    
                </div>
                
            </div>
            

        </li>

    </React.Fragment>

    )



}
export {Peli}