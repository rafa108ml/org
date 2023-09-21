import { useState } from "react";
import "./Campo.css"

const Campo = (props) => {
    
    //los tres punticos al final son solo como formato
    const placeholderModificado = `${props.placeholder}...`
    
    //En la Destructuracion si hacemos esto
    // type sera text a menos que en el prop venga
    //algo diferente
    const {type = "text"}=props;
    

     const manejarCambio = (e)=>{
         props.actualizarValor(e.target.value);
     };

    return <div className={`campo campo-${type}`}> 
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default Campo;