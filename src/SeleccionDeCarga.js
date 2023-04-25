import React from "react";
import './SeleccionDeCarga.css';

function SeleccionDeCarga (props){  

    function listarConDetalle (){
        props.SelecionarModoDeVista('con-detalle')
    }

    function listarSinDetalle (){
        props.SelecionarModoDeVista('sin-detalle')
    }

    function porDefecto(){
        
        if (props.persistencia === '1' && primerCarga == 1 ){
            valorDefecto = true
            primerCarga = 0
        }
        
    }
    let primerCarga = 1;
    let valorDefecto;
    porDefecto();

    function tipoDePersistencia (e){
        props.setPersistencia(e.target.value);
        switch (e.target.value) {
            case '1':                
                props.setListAux([]);
                props.seleccionador([])
                props.setVisto([]);
                props.setVolverVer([]);
            break;
            case '2':                
                props.setListAux(props.listaEnStoragePAV);
                props.setVisto(props.listaEnStorageV)
                props.setVolverVer(props.listaEnStorageVV) 
                props.seleccionador([]);               
                break;

            case '3': 
                props.seleccionador([]);/// solo para el cambio de vista
                                
                break;
        
            default:
                break;
        }

    }


    

    return(
        <React.Fragment>
            <h6 className="opciones" >
                <span className="vista" >modo de vista: </span>
                <span className="m-1 icono-seleccionador" onClick={listarConDetalle}><i className="fa-solid fa-list"></i></span>
                <span className="m-1 icono-seleccionador" onClick={listarSinDetalle} ><i className="fas fa-th-large"></i></span>
                <span className="modo-guardado"  >Persistencia:</span>
                <input type="radio" name="modo-guardado" value=  '1' id="app" checked={valorDefecto} onChange={e=>tipoDePersistencia(e)} />
                <label htmlFor='app' >Volatil</label>
                <input type="radio" name="modo-guardado" value= '2' id="local" onChange={e=>tipoDePersistencia(e)} />
                <label htmlFor='local' >LocalStorage</label>
                <input type="radio" name="modo-guardado" value= '3' id="fire" onChange={e=>tipoDePersistencia(e)} />
                <label htmlFor='fire' >FireBase</label>
            </h6>
            <h6>
            
            </h6>
            
        </React.Fragment>
        
    )

}

export {SeleccionDeCarga}