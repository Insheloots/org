import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/torvalds.png",
      nombre: "Linus Torvalds",
      puesto: "Director TI",

    },
    {
      id: uuid(),
      equipo: "Frontend",
      foto: "https://github.com/midudev.png",
      nombre: "Miguel Durán",
      puesto: "Lider"
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/ThePrimeagen.png",
      nombre: "ThePrimeagen",
      puesto: "Desarrollador de software y arquitectura"
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/geohot.png",
      nombre: "George Hotz",
      puesto: "Head de COMMA e instructor"
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/CodelyTV.png",
      nombre: "Codely TV",
      puesto: "Fullstack"
    }
  ]);

  const [equipos, setEquipos] = useState(
    [
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#3f51b5",
        colorSecundario: "#c5cae9",
      },
      {
        id: uuid(),
        titulo: "Frontend",
        colorPrimario: "#f44336",
        colorSecundario: "#ffcdd2",
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#4caf50",
        colorSecundario: "#c8e6c9",
      },
      {
        id: uuid(),
        titulo: "Devops",
        colorPrimario: "#ff9800",
        colorSecundario: "#ffe0b2",
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#9c27b0",
        colorSecundario: "#e1bee7",
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario: "#00bcd4",
        colorSecundario: "#b2ebf2",
      },
      {
        id: uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#8bc34a",
        colorSecundario: "#dcedc8",
      },
    ]
  );

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    const filtroColaborador = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(filtroColaborador);
  }

  //Actualizar color
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });

    setEquipos(equiposActualizados);
  }


  return (
    <div className="App">
      <Header />

      {
        mostrarFormulario && <Form
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} texto={!mostrarFormulario ? 'Mostrar Formulario' : 'Ocultar Formulario'} />
      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
        />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
