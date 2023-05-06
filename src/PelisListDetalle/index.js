import React from 'react'
import './PelisListDetalle.css'

function PelisListDetalle (props){
    return(
        <React.Fragment>
            <div className='margen-forzado' >

            </div>
            
                <ul className= {"opcion1 " + props.visibilidad} >
                {props.children}
                </ul>
            
            
            
        </React.Fragment>


    )

}
export{PelisListDetalle}