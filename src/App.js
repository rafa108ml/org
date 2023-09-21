import { useState } from 'react';
import {v4 as uuid } from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer'



function App() {
 
  const [mostrarFormulario, actualizarMostrar]=useState(false);

  const [colaboradores, actualizarColaboradores]=useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJaU896ohjPznu2VfZft3mMvuTIvtMw-y3fjVger2kx3czx-_8e569L2I2Y6pFJsTRl0&usqp=CAU",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    }
    ,

    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    }
    ,
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    }
    ,
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    }
    ,
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    }
    ,
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    }
    ,
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  
]);


  //Nuevo concepto, estructura de Ternario --> condicion ? SeMuestras : noSeMuestra

  //encapsulamos actualizarMostrar en cambiarMostrar paara hacer cambiarMostrar una funcion
  //global que podamos llevar al componente org

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //spread operator, estos ... representan que se
    //copia el array y luego le agregamos el nuevo colaborador
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar colaborador
  const eliminarColaborador = (id)=>{
    console.log("eliminar colaborador", id);
    const nuevosColaboradores =colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);

  }

  //actualizar color de equipo
  const actualizarColor = (color, id)=>{
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
          equipo.colorPrimario = color;
      }
      return equipo;
    })

    actualizarEquipos(equiposActualizados);
  }

  //crear equipo
  const crearEquipo = (nuevoEquipo)=>{
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid()}])
  }

  const like = (id) =>{
    console.log("Like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav =  !colaborador.fav;
      }
      return colaborador;
    })

    actualizarColaboradores(colaboradoresActualizados)
  }



  return (
    <div className="App">
      <Header/>
      {/*cualquiera de estas dos lineas hace virtualmente lo mismo */}
      {/*y lo que hacen es: si mostrarFormulario true entonces se renderiza*/}
      {/*formulario, sino no, o sino no pasa nada */}
      
      {/* { mostrarFormulario ? <Formulario /> : <></>}  */}
      { mostrarFormulario  && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
          />
       } 
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        //el metodo map se usa por que retorna un nuevo arreglo
        //REGLA DE REACT Y EL METODO .MAP:
        // cada vez que trabajas con este metodo debes de asignar un key al array que retorna
        //pues le dara una referencia a cada elemento.
      equipos.map((equipo) => 
         
        <Equipo 
        
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter((colaborador) => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
       )
      }

      <Footer></Footer>

    </div>
  );
}

export default App;
