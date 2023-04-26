import React from "react";
import './Menu.css'

function Menu2 (props){

    function selecionPopulares(){
        props.setRenderApi(true);
        props.seleccionador(props.populares)
        props.setBtnEliminarListaPropia(false)
        
    }
    


    function selecionEnCartelera(){
        props.setRenderApi(true);
        props.seleccionador(props.enCartelera)
        props.setBtnEliminarListaPropia(false)
        
    }

    function seleccionProximaVer () { 
        props.setRenderApi(false);
        switch (props.persistencia) {
            case '1':
                props.seleccionador(props.listAux);
                break;
            case '2':              
                props.seleccionador(props.storagePAV );
                props.setSelecStorageBorrar('listaPAV_V4');                
                break;
            case '3':                             
                props.seleccionador(props.firebasePAV);
                props.setColectionName('firebasePAV');                
                break;
        
            default:
                break;
        }

        
        props.setRankeado(false);
        props.setBtnEliminarListaPropia(true)
    }

    function seleccionVolverVer () { 
        props.setRenderApi(false);
        //inFireBase
        switch (props.persistencia) {
            case '1':
                props.seleccionador(props.listVolverVer);
                break;
            case '2':                
                props.seleccionador(props.storageVV );
                props.setSelecStorageBorrar('listaVV_V4');                
                break;
            case '3':                             
                props.seleccionador(props.firebaseVV);/// solo para el cambio de vista                
                //props.setSelecStorageBorrar('listaPAV_V4');
                props.setColectionName('firebaseVV');                
                break;
        
            default:
                break;
        }
        props.setRankeado(true);
        props.setBtnEliminarListaPropia(true)
        
    }

    function seleccionVisto () { 
        props.setRenderApi(false);// si
        
        switch (props.persistencia) {
            case '1':
                props.seleccionador(props.listVisto);
                break;
            case '2':                
                props.seleccionador(props.storageV);
                props.setSelecStorageBorrar('listaV_V4');                
                break;
            case '3':                             
                props.seleccionador(props.firebaseV);
                props.setColectionName('firebaseV');                
                break;
        
            default:
                break;
        }        
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