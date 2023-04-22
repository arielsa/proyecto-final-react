import React from "react";
import './SeleccionDeCarga.css';

function SeleccionDeCarga (props){

    
    //props.persistencia y props.setPersistencia

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
            //console.log('valor por defecto: '+ valorDefecto + ' primercarga: '+ primerCarga );
        }
        
    }
    let primerCarga = 1;
    let valorDefecto;
    porDefecto();

    function tipoDePersistencia (e){// la persistencia cambia al salir de la funcion       
        //e.preventDefault() 
        props.setPersistencia(e.target.value); /////// cambia la persistencia
        //console.log('persistencia elegida ' + props.persistencia );
        switch (e.target.value) {
            case '1':                
                props.setListAux([]);// vacio
                props.seleccionador([])
                props.setVisto([]);
                props.setVolverVer([]);
            break;
            case '2':                
                props.setListAux(props.listaEnStoragePAV);
                console.log(props.listAux);
                props.setVisto(props.listaEnStorageV)
                props.setVolverVer(props.listaEnStorageVV) 
                props.seleccionador([]);/// solo para el cambio de vista
                //console.log(' lista1:  ' + props.storagePAV);                
                break;

            case '3':
                //props.setListAux(props.listaEnStoragePAV);
                //props.setVisto(props.listaEnStorageV)
                //props.setVolverVer(props.listaEnStorageVV) 
                props.seleccionador([]);/// solo para el cambio de vista
                //console.log(' lista1:  ' + props.storagePAV);                
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
                <span className="modo-guardado"  >modo de guardado:</span>
                <input type="radio" name="modo-guardado" value=  '1' id="app" checked={valorDefecto} onChange={e=>tipoDePersistencia(e)} />
                <label htmlFor='app' >Volatil</label>
                <input type="radio" name="modo-guardado" value= '2' id="local" onChange={e=>tipoDePersistencia(e)} />
                <label htmlFor='local' >LocalStorage</label>
                <input type="radio" name="modo-guardado" value= '3' id="fire" onChange={e=>tipoDePersistencia(e)} />
                <label htmlFor='fire' >FireBase</label>
                {/*<span className="m-1 icono-seleccionador" onClick={activacionDePersistencia}>actualizar</span>*/}
            </h6>
            <h6>
            
            </h6>
            
        </React.Fragment>
        
    )

}

export {SeleccionDeCarga}