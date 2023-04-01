import React from "react";
import './ApiList.css'

function ApiList (props){
    //console.log(props)
    //props.setPeliAGuardar () <= aca dentro va un objeto x.title x.url x.overview x.id

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
                                    props.setRanking(0)
                                    props.setFormAux(true);
                                    peli.url=`${URL_IMAGE + peli.poster_path}`;
                                    props.setPeliAGuardar (peli);
                                } } > <i class="fas fa-window-restore icon "></i></span></h2>
                    </div>
                    
                ))}
                </div>
            </div>
        </React.Fragment>

    )

}

export {ApiList}