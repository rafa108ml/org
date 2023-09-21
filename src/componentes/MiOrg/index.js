import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
    //Concepto de Estado - lo entendemos usando la funcionalidad hooks de react
    //el primer hook que usaremos sera el useState
    //useState()
    //para usar el estado es const [nombreVariableConEstado, NombrefuncionqueActualiza] = useState(ValorInicial);
    //las 1variable del array sera la ref al estado, la segunda es una f para cambiarlo
    //useState(); hace la magia por detras con react en cuanto a los estados como tal.

        // const [mostrar, actualizarMostrar] = useState(true);
        // const manejarClick = () => {
        //     console.log("Mostrar/Ocultar elemento", !mostrar);
        //     actualizarMostrar(!mostrar);
        // }

    return <section className="orgSection">
        <h3 className="title">Mi organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;