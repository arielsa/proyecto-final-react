import React from "react";
import { useState } from "react";
import './Ranqueador.css'

function Ranqueador (props){
    
    //props.ranking
    const estrellas = [0,1,2,3,4]
    const [estrellaActiva, setEstrellaActiva] = useState(null);

    function activar(index) {
        //console.log("click en estrella ", index);
        props.setRanking(index);    
        setEstrellaActiva(index);
        props.setStarIndex(index);
    }

    return (
    <div>
        {/* <span className="material-symbols-outlined">favorite</span>
        <span className="material-symbols-outlined">done</span> */}        
        <div className="rank">
            <div className="rankeador-box">
                <div className="stars">
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
        </div>
        
{/* 
        <i className="fa-solid fa-bars"></i>
        
        
        <i className="fa-solid fa-circle-up"></i>
        <i className="fa-solid fa-circle-down"></i>
        <i className="fa-solid fa-gear"></i>
        <i className="fa-solid fa-rotate-right"></i>
        <i className="fa-solid fa-plus"></i>
        <i className="fa-solid fa-minus"></i>
        <i className="fa-solid fa-camera-movie"></i>
        <i className="fa-solid fa-square-xmark"></i>
        <i className="fa-solid fa-square-check"></i>
        <i className="fa-solid fa-circle-check"></i>
        <i className="fa-solid fa-circle-xmark"></i> */}
        
        </div>
    )
}
export {Ranqueador};