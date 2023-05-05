import React from "react";
import './ApiList.css'

function ApiList (props){

    const URL_IMAGE = "https://image.tmdb.org/t/p/original";
    
    return(
        <React.Fragment>
            <div className={"container mt-3 opcion2 " + props.visibilidad }>
                <div className="row ">
                {props.pelis.map((peli) => (

                    <div
                    key={peli.id}
                    className="col-md-4 mb-3 justify-content-center"                    
                    >

                    <div className=" poster-cont " >
                        <img
                        src={ props.renderApi ? `${URL_IMAGE + peli.poster_path}`: peli.url}
                        
                        alt=""
                        height={400}
                        className=" "                        
                        />

                    </div>                    
                    <h4 className="text-center">
                        <span onClick={ () => {
                                    props.setRanking(0)
                                    props.setFormAux(true);
                                    
                                    if(props.renderApi) { peli.url=`${URL_IMAGE + peli.poster_path}`}///////// 
                                    props.setPeliAGuardar (peli);
                                } } > 
                        <i className="fas fa-window-restore icon "></i></span>
                    {peli.title}</h4>
                    </div>
                    
                ))}
                </div>
            </div>
        </React.Fragment>

    )

}

export {ApiList}