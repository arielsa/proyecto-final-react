import React from 'react'

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