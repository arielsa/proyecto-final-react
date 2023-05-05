import React from 'react'
import './FormAux.css'
import { Ranqueador } from '../Ranqueador';
import { useState } from 'react';

function FormAux(props){
    const selecStorageBorrar = props.selecStorageBorrar
    const[mensajePeliRepetida, setMensajePeliRepetida  ]  = useState('')
    let title = props.peliAGuardar.title;
    let id = props.peliAGuardar.id;
    let url= props.peliAGuardar.url
    ////////////////////////////
    let overview=props.peliAGuardar.overview;

     const [listar, setListar] = useState (false)
     const [comentar,setComentar] = useState(false)
     const [textAreaValue, setTextAreaValue] = useState('');
     

    const peliMarcada={
        title: props.peliAGuardar.title,
        id : props.peliAGuardar.id,
        url: props.peliAGuardar.url,
        overview : props.peliAGuardar.overview,
        ranking: props.ranking,
        coment:props.coment,
    }

    const[visto,setVisto]=useState(false)

    const cerrarModal= ()=>{
        setMensajePeliRepetida('')
        setListar(false)
        setVisto(false)
        props.setFormAux(false)
        props.setComent('')
        cerrarComentario()        
    }

    const seleccionProxima = () => {
        //setListar(true)
        cerrarComentario()
        props.setComent('')
        setVisto(false) 
        let permitirCarga; 
        setMensajePeliRepetida('')
        switch (props.persistencia) {
            case '1':
                if (props.listAux.length>0){                    
                    props.filtroDeIntroduccion(peliMarcada,props.listAux) ? permitirCarga= false : permitirCarga = true ;
                
                    if (permitirCarga){
                        props.CargarListAux(peliMarcada)
                        setVisto(false)
                        props.setFormAux(false) 
                    } else{
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                    }
                }else {
                    props.CargarListAux(peliMarcada)
                    setVisto(false)
                    props.setFormAux(false)    
                }                 
                break;
            case '2':
                if (props.storagePAV.length>0){                    
                    props.filtroDeIntroduccion(peliMarcada,props.storagePAV) ? permitirCarga= false : permitirCarga = true ;
                    
                    if (permitirCarga){
                        props.cargarStoragePAV(peliMarcada)
                        setVisto(false)
                        props.setFormAux(false) 
                    } else{
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                    }
                }else {
                    props.cargarStoragePAV(peliMarcada)
                    setVisto(false)
                    props.setFormAux(false)    
                } 

                break;
            case '3':
                if (props.firebasePAV.length>0){                    
                    props.filtroDeIntroduccion(peliMarcada,props.firebasePAV) ? permitirCarga= false : permitirCarga = true ;
                
                    if (permitirCarga){
                        props.cargarFirebasePAV(peliMarcada)// funcion que agregue objeto
                        props.listaEnFirebasePAV(); 
                        setVisto(false)
                        props.setFormAux(false) 
                    } else{
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
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
        setListar(true)
        setVisto(false)
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
                        setListar(false)                               
                    } else{
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                    }
                }
                else{
                    setVisto(true)
                    setListar(false)            
                } 
                break;
            case '2':
                if (props.storageVV.length>0){                    
                    props.filtroDeIntroduccion(peliMarcada,props.storageVV) ? permitirCarga= false : permitirCarga = true ;
                    
                    if (permitirCarga){
                        setVisto(true)
                         
                    } else{
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                        setListar(false)
                    
                    }
                }else {
                    setVisto(true)                        
                } 
                break;
                case '3':
                    if (props.firebaseVV.length>0){                    
                        props.filtroDeIntroduccion(peliMarcada,props.firebaseVV) ? permitirCarga= false : permitirCarga = true ;
                        
                        if (permitirCarga){
                            setVisto(true)                             
                        } else{
                            setListar(false)
                            setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
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
            console.log(peliMarcada)
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
        props.setFormAux(false)
        setVisto(false) //cierro el rankeador
        setListar(false)       
    }

    const seleccionVisto = () =>{
        setListar(true)
        setVisto(false)
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
                        setListar(false)
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                    }
                }
                else{
                    setVisto(true)            
                } 
                break;
            case '2':
                if (props.storageV.length>0){                 
                    props.filtroDeIntroduccion(peliMarcada,props.storageV) ? permitirCarga= false : permitirCarga = true ;
                
                    if (permitirCarga){
                        setVisto(true)
                    } else{
                        setListar(false)
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
                    }
                }else {
                    setVisto(true)  
                } 
                break;
            case '3': 
                if (props.firebaseV.length>0){                
                    props.filtroDeIntroduccion(peliMarcada,props.firebaseV) ? permitirCarga= false : permitirCarga = true ;
                
                    if (permitirCarga){
                        setVisto(true)
                    } else{
                        setListar(false)
                        setMensajePeliRepetida('Esta peli ya esta en la lista seleccionada')
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
                props.CargarListVisto(peliMarcada)
                break;
            case '2':
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
        setListar(false)       
    }

     const eliminar = ()=>{

        setListar(false)
        let indiceObjetoBorrar = props.pelisSeleccionadas.findIndex(function(objeto) {
            return objeto.id === peliMarcada.id 
        });
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
            props.borrarDocumentoEnFirebase(props.peliAGuardar.id, props.colectionName);
        }
        setVisto(false)
        setMensajePeliRepetida('')
        props.setFormAux(false)       
    }

     const crearComentario = () =>{
        setComentar(true)
    }
    const cerrarComentario = () =>{
        setComentar(false)
        props.setComent('')
        setTextAreaValue('')
    }
    const guardarComent = () => {
        props.setComent(textAreaValue)
        setComentar(false)
        setTextAreaValue('')
        console.log(textAreaValue);                       
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
                     <div className={ listar ? '' : 'inactive'} >
                        <span onClick={crearComentario} >comentar/recomentar</span>
                    </div>
                     <div className={comentar ? '': 'inactive' } >
                        <form className={'comentario'}>
                            <textarea class={"form-control"+''} onChange={(event) => setTextAreaValue(event.target.value)} value={textAreaValue} cols="30" rows="2"></textarea>
                            <div className='container'>
                                <divc className="row ">
                                    <button type="button" onClick={guardarComent} class="btn btn-outline-dark col-6" >guardar</button>
                                    <button onClick={cerrarComentario} type="button" class="btn btn-outline-danger col-6" >cerrar</button>
                                </divc>
                            </div>
                        </form>
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