import React from "react";

function ApiList (props){
    
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row ">
                {props.pelis.map((peli) => (

                    <div
                    key={peli.id}
                    className="col-md-4 mb-3 justify-content-center"                    
                    >

                    <div className=" poster " >
                        <img
                        src={peli.url}
                        alt=""
                        height={400}
                        className=" "                        
                        />

                    </div>                    
                    <h4 className="text-center">{peli.title}</h4>
                    </div>
                    
                ))}
                </div>
            </div>
        </React.Fragment>

    )

}

export {ApiList}