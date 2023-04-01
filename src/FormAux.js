import React from 'react'
import './FormAux.css'
import { Ranqueador } from './Ranqueador';
import { useState } from 'react';

function FormAux(props){

    //props.formAux
    
    let title = props.peliAGuardar.title;
    let id = props.peliAGuardar.id;
    let url= props.peliAGuardar.url;
    let overview=props.peliAGuardar.overview;
    const [starIndex, setStarIndex]=useState(0)
    //props.setRanking(starIndex)

    return(
        <React.Fragment>

            <div className={'container '+ ( !props.formAux? ' inactive' :'' ) }>
                <div className= ' row ModalBackground'>
                    <div>
                         <img src={url}  /> 
                    </div>
                    <div >
                        <h4 className='align-text-center'>Guardar en lista : {title}</h4>
                        <span>vista |</span>
                        <span> volver a ver |</span>
                        <span> proxima a ver</span>
                                            
                    </div>
                    <div>
                        <h4>Ranqueador:</h4>
                        <Ranqueador setStarIndex={setStarIndex} ranking={props.ranking} setRanking={props.setRanking}/>
                    </div>
                    <h2><span onClick={ () => {  props.setFormAux(false);                               
                        } } > <i class="fas fa-window-restore icon "></i></span></h2>
                </div>
            </div>

           

        </React.Fragment>
    )
}

export {FormAux}