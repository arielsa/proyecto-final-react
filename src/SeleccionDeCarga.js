import React from "react";
import './SeleccionDeCarga.css';

function SeleccionDeCarga (props){

    const[persistencia,setPersistencia]= React.useState('0')

    function listarConDetalle (){
        props.SelecionarModoDeVista('con-detalle')
    }


    function listarSinDetalle (){
        props.SelecionarModoDeVista('sin-detalle')
    }

    function porDefecto(){
        
        if (persistencia === '0'){
            valorDefecto = 'true'
        }
        
    }
    let valorDefecto;
    porDefecto();

    return(
        <React.Fragment>
            <h6 className="opciones" >
                <span className="vista" >modo de vista: </span>
                <span className="m-1 icono-seleccionador" onClick={listarConDetalle}><i className="fa-solid fa-list"></i></span>
                <span className="m-1 icono-seleccionador" onClick={listarSinDetalle} ><i className="fas fa-th-large"></i></span>
                <span className="modo-guardado"  >modo de guardado:</span>
                <input type="radio" name="modo-guardado" value='1' id="app" checked={valorDefecto} onChange={e=>setPersistencia(e.target.value)} />
                <label for='app' >APP</label>
                <input type="radio" name="modo-guardado" value='2' id="local" onChange={e=>setPersistencia(e.target.value)} />
                <label for='local' >LocalStorage</label>
                <input type="radio" name="modo-guardado" value='3' id="fire" onChange={e=>setPersistencia(e.target.value)} />
                <label for='fire' >FireBase</label>
            </h6>
            <h6>
            
            </h6>
            
        </React.Fragment>
        
    )

}

export {SeleccionDeCarga}