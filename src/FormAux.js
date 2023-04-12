import React from 'react'
import './FormAux.css'
import { Ranqueador } from './Ranqueador';
import { useState } from 'react';

function FormAux(props){
    //props.renderApi (es true en mis listas personales)
    //props.formAux
    const[mensajePeliRepetida, setMensajePeliRepetida  ]  = useState('')
    let title = props.peliAGuardar.title;
    let id = props.peliAGuardar.id;
    let url= props.peliAGuardar.url
    ////////////////////////////
    console.log(url);
    let overview=props.peliAGuardar.overview;

    const peliMarcada={
        title: props.peliAGuardar.title,
        id : props.peliAGuardar.id,
        url: props.peliAGuardar.url,
        overview : props.peliAGuardar.overview,
        ranking: props.ranking,
    }

    const[visto,setVisto]=useState(false)

    const cerrarModal= ()=>{
        setVisto(false)
        props.setFormAux(false)
        setMensajePeliRepetida('')
    }
    const seleccionVisto = () =>{
        setVisto(true)
        setMensajePeliRepetida('')
    }

    const seleccionProxima = () => {
        let permitirCarga;       
        
        if (props.listAux.length>0){                    
            props.filtroDeIntroduccion(peliMarcada,props.listAux) ? permitirCarga= false : permitirCarga = true ;
            //console.log(permitirCarga);
            if (permitirCarga){
                props.CargarListAux(peliMarcada)
                setVisto(false)
                props.setFormAux(false) 
            } else{
                setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                console.log('no puede ingresar objeto al array');
            }
        }else {
            props.CargarListAux(peliMarcada)
            setVisto(false)
            props.setFormAux(false)    
        }       
        //console.log(peliMarcada.url);
    }

    const seleccionVolverVer = () =>{
        setVisto(true)// abrir el ranqueador     
    }

    const guardarSeleccionVolverVer= ()=>{ // se guarda con el boton guardar del rankeador
        let permitirCarga;
        if(props.listVolverVer.length>0)
        {
            props.filtroDeIntroduccion(peliMarcada,props.listVolverVer) ? permitirCarga= false : permitirCarga = true ;
            if (permitirCarga){
                props.CargarListVolverVer(peliMarcada)                               
            } else{
                setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                console.log('no puede ingresar objeto al array');
            }
        }
        else{
            props.CargarListVolverVer(peliMarcada)            
        }        
        console.log(props.ranking + 'ranking' );
        console.log(peliMarcada);
        props.setFormAux(false)
    }




    return(
        <React.Fragment>

            <div className={'container '+ ( !props.formAux? ' inactive' :'' ) }>
                <div className= ' row ModalBackground'>
                    <div className="card poster-cont ">
                    <div className='mt-3'>
                    <img src={url}  /> 
                    </div>
                    <div className='poster-cont '>
                        <h4 className='align-text-center'>Guardar en lista : {title}</h4>
                        <div>
                            <span onClick={seleccionVisto} >vista |</span>
                            <span onClick={seleccionVolverVer} > volver a ver |</span>
                            <span onClick={seleccionProxima } > proxima a ver</span>
                            <div className='poster-cont'>
                                <h4 className="mensajePeliRepetida">{mensajePeliRepetida}</h4>
                            </div>
                            
                        </div>
                        
                                            
                    </div>
                    <div className={ visto? '':'inactive'}  >
                        <h4>Ranqueador:</h4>
                        <Ranqueador 
                        guardarSeleccionVolverVer={guardarSeleccionVolverVer}
                        ranking={props.ranking} setRanking={props.setRanking}/>
                    </div>
                    <h2><span onClick={  cerrarModal } > <i className="fas fa-window-restore icon "></i></span></h2>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export {FormAux}