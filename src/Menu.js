import React from "react";
import './Menu.css'

function Menu2 (props){

    function selecionPopulares(){
        //console.log('pelis populares');
       // console.log(props.populares);
        props.setRenderApi(true);
        props.seleccionador(props.populares)
        props.setBtnEliminarListaPropia(false)
        
    }
    


    function selecionEnCartelera(){
        //console.log('pelis populares');
       // console.log(props.populares)
        props.setRenderApi(true);
        props.seleccionador(props.enCartelera)
        props.setBtnEliminarListaPropia(false)
        
    }

    function seleccionProximaVer () { 
        props.setRenderApi(false);
        props.seleccionador(props.listAux);
        props.setRankeado(false);
        props.setBtnEliminarListaPropia(true)
    }

    function seleccionVolverVer () { 
        props.setRenderApi(false);
        props.seleccionador(props.listVolverVer);
        //console.log(props.listVolverVer);
        props.setRankeado(true);
        props.setBtnEliminarListaPropia(true)
        
    }

    function seleccionVisto () { 
        props.setRenderApi(false);// si
        props.seleccionador(props.listVisto);// cambiar
        //console.log(props.listVisto);// camibar
        props.setRankeado(true);// si
        props.setBtnEliminarListaPropia(true)//si
        
    }


    return(
        <div className="row">
            <div className="col-12 d-flex align-items-center m-2 ">
                <h1> <i className="fas fa-film log"></i></h1><h1 className="log2" > PeList</h1>
                <span  onClick={seleccionVisto} className="mx-3 selec ">vistas</span>
                <span onClick={seleccionVolverVer} className="mx-3 selec text-center ">volver a ver</span>
                <span onClick={seleccionProximaVer} className="mx-3 selec text-center "> proxima a ver</span>
                
                <span onClick={selecionPopulares} className="mx-3 selec text-center "><i className="fas fa-search-plus"></i> populares</span>
                <span onClick={selecionEnCartelera} className="mx-3 selec text-center "><i className="fas fa-search-plus"></i> estrenos</span>
            </div>
        </div>
    )
}

export {Menu2}