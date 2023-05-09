import React, { Fragment } from "react";
import { useState } from "react";
import './Menu.css'

function Menu2 (props){
    const [selectorListas, setSelectorListas] = useState(0)
    const [selectorApi, setSelectorApi] = useState(0)
    const [listaDesplegada,setListaDesplegada] = useState(0)
 



    function selecionPopulares(){
        props.setText('Populares')
        setSelectorListas(0);
        setSelectorApi(1);  
        props.setRenderApi(true);
        props.seleccionador(props.populares)
        props.setBtnEliminarListaPropia(false)
        setMenuDiminuto(false)
        
    }

    function selecionEnCartelera(){
        props.setText('Estrenos')
        setSelectorListas(0) 
        setSelectorApi(2); 
        props.setRenderApi(true);
        props.seleccionador(props.enCartelera)
        props.setBtnEliminarListaPropia(false)
        setMenuDiminuto(false)
        
    }

    function seleccionProximaVer () { 
        setSelectorListas(3)
        props.setText('proxima a ver')
        setMenuDiminuto(false)
        setSelectorApi(0);  
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
        props.setText('volver a ver')
        setSelectorListas(2)
        setMenuDiminuto(false)
        setSelectorApi(0);  
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
        props.setText('Visto')
        setSelectorListas(1) 
        setMenuDiminuto(false) 
        setSelectorApi(0);      
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

    function desplegarListas(){
        listaDesplegada === 0 ? setListaDesplegada(1) : setListaDesplegada(0)        
    }

    const [MenuDiminuto,setMenuDiminuto] = useState(false)

    function desplegarmenuDiminuto (){
        MenuDiminuto === false ? setMenuDiminuto(true) : setMenuDiminuto(false)
    }


    return(
        <React.Fragment>
            <section className="menu-grande" >
                <div className="row">
                    <div className="col-12 d-flex align-items-center m-2 opciones-text ">
                        <h1> <i className="fas fa-film log"></i></h1><h1 className="log2" > PeList</h1>
                        <span  onClick={seleccionVisto} className={`mx-3 selec ${selectorListas === 1 ? 'selector-on': '' }`}>vistas</span>
                        <span onClick={seleccionVolverVer} className={`mx-3 selec ${selectorListas === 2 ? 'selector-on': '' }`}>volver a ver</span>
                        <span onClick={seleccionProximaVer} className={`mx-3 selec ${selectorListas === 3 ? 'selector-on': '' }`}> proxima a ver</span>                        
                        <span onClick={selecionPopulares} className= {`mx-3 selec text-center ${selectorApi === 1 ? 'selector-on2' :''}`} ><i className="fas fa-search-plus"></i> populares</span>
                        <span onClick={selecionEnCartelera} className={`mx-3 selec text-center ${selectorApi === 2 ? 'selector-on2' :''}`}><i className="fas fa-search-plus"></i> estrenos</span>
                    </div>
                </div>
            </section>

            <section className="menu-chico" >
                <div className="row">
                    <div className="col-12 d-flex align-items-center m-2 ">
                    <h1> <i className="fas fa-film log"></i></h1><h1 className="log2" > PeList</h1>
                    <span onClick={desplegarListas} class="material-symbols-outlined menu-mas add2">add</span>
                    <span  onClick={seleccionVisto} className={`mx-1 centrar-texto-menuchico selec ${selectorListas === 1 ? 'selector-on': '' } ${ listaDesplegada === 0 ? 'inactive' : '' } `}>vistas</span>
                    <span onClick={seleccionVolverVer} className={`mx-1 centrar-texto-menuchico selec ${selectorListas === 2 ? 'selector-on': '' }${ listaDesplegada === 0 ? 'inactive' : '' }`}>volver a ver</span>
                    <span onClick={seleccionProximaVer} className={`mx-1 centrar-texto-menuchico selec ${selectorListas === 3 ? 'selector-on': '' }${ listaDesplegada === 0 ? 'inactive' : '' }`}> proxima a ver</span>
                    <span onClick={desplegarListas} class="material-symbols-outlined menu-mas add-movil">add</span>
                    <span onClick={selecionPopulares} className= {`mx-1 centrar-texto-menuchico selec text-center ${selectorApi === 1 ? 'selector-on2' :''}${ listaDesplegada === 1 ? 'inactive' : '' }`} ><i className="fas fa-search-plus lupita "></i> populares</span>
                    <span onClick={selecionEnCartelera} className={`mx-1 centrar-texto-menuchico selec text-center ${selectorApi === 2 ? 'selector-on2' :''}${ listaDesplegada === 1 ? 'inactive' : '' }`}><i className="fas fa-search-plus lupita "></i> estrenos</span>
                    </div>
                </div>
            </section>

            <section className={`menu-diminuto + ${MenuDiminuto ? "ModalBackground " :" "} ` } >
                <div className="row">
                    <div className="col-12 d-flex  m-2 ">

                        
                              
                                <h1> <i className={` ${MenuDiminuto ? " inactive" :"fas fa-film log"} ` }></i></h1><h1 className="log2" ></h1>
                        
                                <span onClick={desplegarmenuDiminuto} class={` ${MenuDiminuto ? " inactive" :"material-symbols-outlined menu-mas add"} `}>menu</span>

                                
                              
                     
                            
 



                        
                        <div className={`container  ${MenuDiminuto ? "  " :"inactive"} ` }>
                            <div className="row  justify-content-center ">
                            <span  onClick={seleccionVisto} className={`mx-1  menu-mininuto-of  col-12 centrar-texto-menuchico selec ${selectorListas === 1 ? 'selector-on': ' menu-diminuto-on ' } `}>vistas</span>
                            <span onClick={seleccionVolverVer} className={`mx-1  menu-mininuto-of  col-12 centrar-texto-menuchico selec ${selectorListas === 2 ? 'selector-on': ' menu-diminuto-on ' }`}>volver a ver</span>
                            <span onClick={seleccionProximaVer} className={`mx-1  menu-mininuto-of  col-12 centrar-texto-menuchico selec ${selectorListas === 3 ? 'selector-on': ' menu-diminuto-on ' }`}> proxima a ver</span>
                            <span onClick={selecionPopulares} className= {`mx-1  menu-mininuto-of  col-12 centrar-texto-menuchico selec text-center ${selectorApi === 1 ? 'selector-on2' :' menu-diminuto-on '}`} ><i className="fas fa-search-plus lupita "></i> populares</span>
                            <span onClick={selecionEnCartelera} className={`mx-1  menu-mininuto-of  col-12 centrar-texto-menuchico selec text-center ${selectorApi === 2 ? 'selector-on2' :' menu-diminuto-on '}`}><i className="fas fa-search-plus lupita "></i> estrenos</span>
                            </div>
                        </div>
                        <div className={` ${MenuDiminuto ? " inactive" :"seleccion-unic m-2 align-self-center "} `}> {props.text}</div>                   

                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}

export {Menu2}