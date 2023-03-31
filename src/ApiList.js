import React from "react";
import './ApiList.css'

function ApiList (props){
    //console.log(props) 
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
                        src={`${URL_IMAGE + peli.poster_path}`}
                        alt=""
                        height={400}
                        className=" "                        
                        />

                    </div>                    
                    <h4 className="text-center">{peli.title}</h4>
                    <h2><span onClick={ () => {
                                  console.log('abrir modal desde peli sin detalle');
                                } } > <i class="fas fa-window-restore icon "></i></span></h2>
                    </div>
                    
                ))}
                </div>
            </div>
        </React.Fragment>

    )

}

export {ApiList}