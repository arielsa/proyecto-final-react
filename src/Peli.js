import React from  'react'

const urlImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaMa3ir58raQ9jobi4_LIFoc8dBQQDGiJyA&usqp=CAU';

function Peli (props){
    return(    
    <React.Fragment>    
        
        <li>
            <div>
                <img src={props.url}/>{/*  URLImage+"/"props.poster_path  */ }
            </div>
            <div>
            <h4 className="text-center">{props.title}</h4>
            {console.log(props.title)}
                <span>+</span>
            </div>
        </li>

    </React.Fragment>

    )



}
export {Peli}