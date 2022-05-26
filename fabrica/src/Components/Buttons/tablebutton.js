import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Tablebutton = (props) => {
    return ( <div className = "d-grid gap-2 col-2 mx-auto">
        <button className={props.clase}> 
        {props.nombre}
        </button> 
        </div>
    );
}

export default Tablebutton;