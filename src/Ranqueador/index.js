import React from "react";
import { useState } from "react";
import './Ranqueador.css'

function Ranqueador (props){
    const estrellas = [0,1,2,3,4]
    const [estrellaActiva, setEstrellaActiva] = useState(null);

    function activar(index) {
        props.setRanking(index); // el estado del ranking en app   
        setEstrellaActiva(index);// estrella activa es solo para el css
        
    }


    return (
        <div className="container">       
            <div className="rank row">
                <div className="rankeador-box col-12">
                    <div className="stars selec">
                        {estrellas.map((estrella, index) => (
                            <i
                            key={index}
                            className={
                                "fa-sharp fa-solid fa-star stars " +
                                (index <= props.ranking ? "active" : "")
                            }
                            onClick={() => activar(index)}
                            ></i>
                        ))}
                    </div>                        
                </div>
                <div className="rankeador-box guardar-ranking col-12" 
                onClick=
                {
                    props.listRankeadaGuardar=='volverVer' ? props.guardarSeleccionVolverVer : props.guardarSeleccionVisto 
                    } >guardar</div>
            </div> 
        </div>
    )
}
export {Ranqueador};