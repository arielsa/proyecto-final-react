import React from "react";
import './Menu.css'

class Menu extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-12 d-flex align-items-center m-2 ">
                    <h1> <i className="fas fa-film log"></i></h1><h1 className="log2" > PeList</h1>
                    <span className="mx-3 ">vistas</span>
                    <span className="mx-3 ">proxima a ver</span>
                    <span className="mx-3 ">volver a ver</span>
                </div>
            </div>
        )
    }
}

export {Menu}