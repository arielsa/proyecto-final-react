import React from 'react'
import './PelisListDetalle.css'

function PelisListDetalle (props){
    return(
        <React.Fragment>
            
                <ul className= {"opcion1 " + props.visibilidad} >
                {props.children}
                </ul>
            
            
            
        </React.Fragment>


    )

}
export{PelisListDetalle}