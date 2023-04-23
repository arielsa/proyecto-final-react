import React from 'react'
import './FormAux.css'
import { Ranqueador } from './Ranqueador';
import { useState } from 'react';

function FormAux(props){
    //props.renderApi (es true en mis listas personales)
    //props.formAux
    const selecStorageBorrar = props.selecStorageBorrar
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
        setVisto(false) 
        let permitirCarga; 
        setMensajePeliRepetida('')
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
                //console.log('array: ' + props.firebasePAV );
                //console.log('tipo: ' + typeof props.firebasePAV );
                //console.log('tamaño: ' + props.firebasePAV.length );
                if (props.firebasePAV.length>0){                    
                    props.filtroDeIntroduccion(peliMarcada,props.firebasePAV) ? permitirCarga= false : permitirCarga = true ;
                    //console.log(permitirCarga);
                    if (permitirCarga){
                        props.cargarFirebasePAV(peliMarcada)// funcion que agregue objeto
                        props.listaEnFirebasePAV(); 
                        setVisto(false)
                        props.setFormAux(false) 
                    } else{
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                        //console.log('no puede ingresar objeto al array');
                    }
                }else {
                    props.cargarFirebasePAV(peliMarcada)
                    setVisto(false)
                    props.setFormAux(false)    
                } 
                break;
        
            default:
                break;
        }
        

    }

        /////////////////////////listVolverVer o listVisto
        const [listRankeadaGuardar, setListRankeadaGuardar] = React.useState('')

    const seleccionVolverVer = () =>{
        setMensajePeliRepetida('')
        setListRankeadaGuardar('volverVer')
        let permitirCarga;
        switch (props.persistencia) {
            case '1':                    
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
                break;
            case '2':
                if (props.storageVV.length>0){                    
                    props.filtroDeIntroduccion(peliMarcada,props.storageVV) ? permitirCarga= false : permitirCarga = true ;
                    //console.log(permitirCarga);
                    if (permitirCarga){
                        setVisto(true) 
                    } else{
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                        //console.log('no puede ingresar objeto al array');
                    }
                }else {
                    setVisto(true)    
                } 
                break;
                case '3':
                    if (props.firebaseVV.length>0){                    
                        props.filtroDeIntroduccion(peliMarcada,props.firebaseVV) ? permitirCarga= false : permitirCarga = true ;
                        //console.log(permitirCarga);
                        if (permitirCarga){
                            setVisto(true) 
                        } else{
                            setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                            //console.log('no puede ingresar objeto al array');
                        }
                    }else {
                        setVisto(true)    
                    } 
                    break;
        
            default:
                break;
        }        
    }

    const guardarSeleccionVolverVer= ()=>{ // se guarda con el boton guardar del rankeador

    switch (props.persistencia) {
        case '1':
            props.CargarListVolverVer(peliMarcada)
            break;
        case '2':
            props.cargarStorageVV(peliMarcada)  
            break;
        case '3':
            props.cargarFirebaseVV(peliMarcada);
            props.listaEnFirebaseVV();
            break;         
        default:
            break;
    }
    
        //console.log(props.ranking + 'ranking' ); 
        //console.log(peliMarcada);
        props.setFormAux(false)
        setVisto(false) //cierro el rankeador       
    }

    const seleccionVisto = () =>{
        setMensajePeliRepetida('')
        setListRankeadaGuardar('visto')
        let permitirCarga;
        switch (props.persistencia) {
            case '1':                    
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
                break;
            case '2':
                if (props.storageV.length>0){ 
                    //console.log('pelisselecionadas: ');
                    //console.log(props.pelisSeleccionadas);                   
                    props.filtroDeIntroduccion(peliMarcada,props.storageV) ? permitirCarga= false : permitirCarga = true ;
                    //console.log(permitirCarga);
                    if (permitirCarga){
                        setVisto(true) 
                    } else{
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                        //console.log('no puede ingresar objeto al array');
                    }
                }else {
                    setVisto(true)    
                } 
                break;
            case '3': 
                if (props.firebaseV.length>0){ 
                    //console.log('pelisselecionadas: ');
                    //console.log(props.pelisSeleccionadas);                   
                    props.filtroDeIntroduccion(peliMarcada,props.firebaseV) ? permitirCarga= false : permitirCarga = true ;
                    //console.log(permitirCarga);
                    if (permitirCarga){
                        setVisto(true) 
                    } else{
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                        //console.log('no puede ingresar objeto al array');
                    }
                }else {
                    setVisto(true)    
                } 
                break;
        
            default:
                break;
        }   
    }

    const guardarSeleccionVisto= ()=>{ // se guarda con el boton guardar del rankeador
        switch (props.persistencia) {
            case '1':
                //console.log('pelisselecionadas: ');
                //console.log(props.pelisSeleccionadas);
                props.CargarListVisto(peliMarcada)
                break;
            case '2':
                //console.log('pelisselecionadas: ');
                //console.log(props.pelisSeleccionadas);
                props.cargarStorageV(peliMarcada)  
                break;
            case '3':
                props.cargarFirebaseV(peliMarcada);
                props.listaEnFirebaseV();
                break;            
            default:
                break;
        }       
        setVisto(false) //cierro el rankeador
        props.setFormAux(false)       
    }

    const eliminar = ()=>{
        //console.log('pelisselecionadas: ');
        //console.log(props.pelisSeleccionadas);

        let indiceObjetoBorrar = props.pelisSeleccionadas.findIndex(function(objeto) {
            return objeto.id === peliMarcada.id 
        });
        //console.log(indiceObjetoBorrar);
        props.pelisSeleccionadas.splice(indiceObjetoBorrar,1);
        
        if(props.persistencia==='2')
        {
            let StringListName = selecStorageBorrar
            let listaAcambiar = JSON.parse(localStorage.getItem(StringListName))
            localStorage.removeItem(StringListName)
            let indiceObjetoBorrarStorage = listaAcambiar.findIndex(function(objeto) {
                return objeto.id === peliMarcada.id 
            });
            listaAcambiar.splice(indiceObjetoBorrarStorage,1);
            localStorage.setItem(StringListName,JSON.stringify(listaAcambiar))
        }
        if (props.persistencia==='3')
        {
            //console.log(props.peliAGuardar.id);
            props.borrarDocumentoEnFirebase(props.peliAGuardar.id, props.colectionName);
            //eliminarDocumento()
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
                            <span onClick={seleccionVisto} >visto |</span>
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