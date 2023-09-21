import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, actualizarNombre]= useState("");
    const [puesto, actualizarPuesto]= useState("");
    const [foto, actualizarFoto]= useState("");
    const [equipo, actualizarEquipo] =useState("");
    
    const [titulo, actualizarTitulo]=useState("");
    const [color, actualizarColor]=useState(""); 

    //ojo aca, cuando creamos una variable que tiene el mismo nombre de una key
    //en un props esta toma por defecto ese valor automaticamente.
    //registrarcolaborador es una funcion que viene del app.js
    const {registrarColaborador, crearEquipo }=props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar el envio");

        //con esto harland ejemplificaba como tomamos los valores
        //y los mandamos a algun servicio.
        let datosAenviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAenviar);
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color});

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
           <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}/>

           <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto}
                actualizarValor={actualizarPuesto}/>

           <Campo 
                titulo="Foto"
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto}
                actualizarValor={actualizarFoto}/>

            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
           />
           <Boton>
                Crear 
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
           <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}/>

           <Campo 
                titulo="Color primario" 
                placeholder="Ingresar color en Hex" 
                required 
                valor={color}
                actualizarValor={actualizarColor}
                type="color"/>
            <Boton>Registrar equipo</Boton>    
        </form>        
    </section> 
}

export default Formulario;