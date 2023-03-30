import React from "react";
import './SeleccionDeCarga.css';

function SeleccionDeCarga (props){

    function listarConDetalle (){
        props.SelecionarModoDeVista('con-detalle')
    }


    function listarSinDetalle (){
        props.SelecionarModoDeVista('sin-detalle')
    }

    return(
        <React.Fragment>
            <h6>
                <span>modo de vista: </span>
                <span className="m-1 icono-seleccionador" onClick={listarConDetalle}><i className="fa-solid fa-list"></i></span>
                <span className="m-1 icono-seleccionador" onClick={listarSinDetalle} ><i className="fas fa-th-large"></i></span>
            </h6>
            
        </React.Fragment>
        
    )

}

export {SeleccionDeCarga}