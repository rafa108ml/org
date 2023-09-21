import './ListaOpciones.css'

const ListaOpciones = (props) => {


//Metodo map -> arrrelo.map( (equipo, index)=>{ 
//     return <option></option> 
//} )    

    
//   equipo representa cada uno de los elemntos del array que va iterando
// e index representa la posicion de este equipo, estos valores pueden tener
//el nombre que sea, la funcion call back que se sobre escribe para cada uno del os items
//es la que esta dentro de los {}

const manejarCambio =(e)=>{
    console.log("cambio", e.target.value);
    props.actualizarEquipo(e.target.value);
}

return <div className='lista-opciones'>
    <label>{props.titulo}</label>
    <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => {
            return <option key={index} value={equipo}>{equipo}</option>}
            )}  
    </select>
</div>
}

export default ListaOpciones;