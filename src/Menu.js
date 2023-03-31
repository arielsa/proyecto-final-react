import React from "react";
import './Menu.css'

function Menu2 (props){

    function selecionPopulares(){
        //console.log('pelis populares');
       // console.log(props.populares);
        props.seleccionador(props.populares)
    }
    


    function selecionEnCartelera(){
        //console.log('pelis populares');
       // console.log(props.populares);
        props.seleccionador(props.enCartelera)
    }


    return(
        <div className="row">
            <div className="col-12 d-flex align-items-center m-2 ">
                <h1> <i className="fas fa-film log"></i></h1><h1 className="log2" > PeList</h1>
                <span className="mx-3 selec ">vistas</span>
                <span className="mx-3 selec ">proxima a ver</span>
                <span className="mx-3 selec ">volver a ver</span>
                
                <span onClick={selecionPopulares} className="mx-3 selec "><i class="fas fa-search-plus"></i> populares</span>
                <span onClick={selecionEnCartelera} className="mx-3 selec "><i class="fas fa-search-plus"></i> estrenos</span>
            </div>
        </div>
    )
}

export {Menu2}