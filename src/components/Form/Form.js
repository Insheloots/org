import { useState } from "react";
import "./Form.css";
import CampoTexto from '../CampoTexto';
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";


const Form = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const { registrarColaborador } = props;

    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        }
        registrarColaborador(datosEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Crear Colaborador</h2>
            <CampoTexto
                titulo="Nombre"
                placeholder="Ingresar Nombre"
                required
                valor={nombre}
                setValor={setNombre}
            />
            <CampoTexto
                titulo="Puesto"
                placeholder="Ingresar Puesto"
                required
                valor={puesto}
                setValor={setPuesto}
            />
            <CampoTexto
                titulo="Foto"
                placeholder="https://github.com/user.png"
                required
                valor={foto}
                setValor={setFoto}
            />
            <ListaOpciones
                valor={equipo}
                setEquipo={setEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear" className="btn" />


        </form>
    </section>
}

export default Form;