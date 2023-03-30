import React from "react";
import './Menu.css'

function Menu2 (props){

    function selecionPopulares(){
        //console.log('pelis populares');
       // console.log(props.populares);
        props.seleccionador(props.populares)
    }
    
    function selecionLanzamientos(){
        //console.log('pelis populares');
       // console.log(props.populares);
        props.seleccionador(props.lanzamientos)
    }


    return(
        <div className="row">
            <div className="col-12 d-flex align-items-center m-2 ">
                <h1> <i className="fas fa-film log"></i></h1><h1 className="log2" > PeList</h1>
                <span className="mx-3 selec ">vistas</span>
                <span className="mx-3 selec ">proxima a ver</span>
                <span className="mx-3 selec ">volver a ver</span>
                <span onClick={selecionLanzamientos} className="mx-3 selec">ultimos lanzamientos</span>
                <span onClick={selecionPopulares} className="mx-3 selec ">populares</span>
            </div>
        </div>
    )
}

export {Menu2}