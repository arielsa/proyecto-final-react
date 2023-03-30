import React from 'react'
import './PelisList.css'

function PelisList (props){
    return(
        <React.Fragment>
            
                <ul>
                {props.children}
                </ul>
            
            
            
        </React.Fragment>


    )

}
export{PelisList}