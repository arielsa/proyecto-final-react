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
    //console.log(url);
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
        setMensajePeliRepetida('')
        setVisto(false)
        props.setFormAux(false)        
    }

    const seleccionProxima = () => {
        let permitirCarga; 

        console.log('proxima');
        console.log( 'persistencia antes: '+ props.persistencia);
        
        switch (props.persistencia) {
            case '1':
                if (props.listAux.length>0){                    
                    props.filtroDeIntroduccion(peliMarcada,props.listAux) ? permitirCarga= false : permitirCarga = true ;
                    //console.log(permitirCarga);
                    if (permitirCarga){
                        props.CargarListAux(peliMarcada)
                        setVisto(false)
                        props.setFormAux(false) 
                    } else{
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                        //console.log('no puede ingresar objeto al array');
                    }
                }else {
                    props.CargarListAux(peliMarcada)
                    setVisto(false)
                    props.setFormAux(false)    
                }       
                //console.log(peliMarcada.url);                
                break;
            case '2':
                if (props.storagePAV.length>0){                    
                    props.filtroDeIntroduccion(peliMarcada,props.storagePAV) ? permitirCarga= false : permitirCarga = true ;
                    //console.log(permitirCarga);
                    if (permitirCarga){
                        props.cargarStoragePAV(peliMarcada)
                        setVisto(false)
                        props.setFormAux(false) 
                    } else{
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                        //console.log('no puede ingresar objeto al array');
                    }
                }else {
                    props.cargarStoragePAV(peliMarcada)
                    setVisto(false)
                    props.setFormAux(false)    
                } 

                break;
            case '3':
                break;
        
            default:
                break;
        }
        

    }

        /////////////////////////listVolverVer o listVisto
        const [listRankeadaGuardar, setListRankeadaGuardar] = React.useState('')

    const seleccionVolverVer = () =>{
        setListRankeadaGuardar('volverVer')
        let permitirCarga;
        if(props.listVolverVer.length>0)
        {
            props.filtroDeIntroduccion(peliMarcada,props.listVolverVer) ? permitirCarga= false : permitirCarga = true ;
            if (permitirCarga){
                setVisto(true)                               
            } else{
                setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                //console.log('no puede ingresar objeto al array');
            }
        }
        else{
            setVisto(true)            
        }     
    }

    const guardarSeleccionVolverVer= ()=>{ // se guarda con el boton guardar del rankeador
        props.CargarListVolverVer(peliMarcada)        
        //console.log(props.ranking + 'ranking' );
        //console.log(peliMarcada);
        props.setFormAux(false)
        setVisto(false) //cierro el rankeador       
    }

    const seleccionVisto = () =>{
        setListRankeadaGuardar('visto')
        let permitirCarga;
        if(props.listVisto.length>0)
        {
            props.filtroDeIntroduccion(peliMarcada,props.listVisto) ? permitirCarga= false : permitirCarga = true ;
            if (permitirCarga){
                setVisto(true)                               
            } else{
                setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                //console.log('no puede ingresar objeto al array');
            }
        }
        else{
            setVisto(true)            
        }     
    }

    const guardarSeleccionVisto= ()=>{ // se guarda con el boton guardar del rankeador
        props.CargarListVisto(peliMarcada)        
        //console.log(props.ranking + 'ranking' );
        //console.log(peliMarcada);        
        setVisto(false) //cierro el rankeador
        props.setFormAux(false)       
    }

    const eliminar = ()=>{

        let indiceObjetoBorrar = props.pelisSeleccionadas.findIndex(function(objeto) {
            return objeto.id === peliMarcada.id 
        });
        //console.log(indiceObjetoBorrar);
        props.pelisSeleccionadas.splice(indiceObjetoBorrar,1);
        
        if(props.persistencia==='2')
        {
            /*
            agarrar la lista del storage y parcearla
            la mapeo busco objeto
            lo borro 
            y vuelvo a setear el storage
             */
            let listaAcambiar = JSON.parse(localStorage.getItem('listaPAV_V4'))
            localStorage.removeItem('listaPAV_V4')
            let indiceObjetoBorrarStorage = listaAcambiar.findIndex(function(objeto) {
                return objeto.id === peliMarcada.id 
            });
            listaAcambiar.splice(indiceObjetoBorrarStorage,1);
            localStorage.setItem('listaPAV_V4',JSON.stringify(listaAcambiar))
        }
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
                        listRankeadaGuardar={listRankeadaGuardar}
                        guardarSeleccionVisto={guardarSeleccionVisto}
                        guardarSeleccionVolverVer={guardarSeleccionVolverVer}
                        ranking={props.ranking} setRanking={props.setRanking}/>
                    </div>
                    <h2 className='modal-opciones-inferiores' >
                        <span  className='opcion-modal' onClick={  cerrarModal } > 
                            <i  id='cerrar' className="fas fa-window-restore  "></i>
                            <label htmlFor='cerrar'  className='modal-label' >Cerrar</label>
                        </span>
                        <span onClick={eliminar} className= {props.btnEliminarListaPropia ? 'opcion-modal icon2' : 'opcion-modal icon2 inactive' }  >                            
                            <i id='eliminar'  className="fa-solid fa-circle-xmark  "></i>
                            <label htmlFor='eliminar'  className='modal-label '  >Eliminar</label>                            
                        </span>
                    </h2>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export {FormAux}