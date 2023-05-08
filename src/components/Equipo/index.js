import Colaborador from '../Colaborador';
import './Equipo.css'

const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo, id } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor } = props;

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {colaboradores.length > 0 &&
            <section className='equipo' style={{ backgroundColor: colorSecundario }}>
                <input
                    type='color'
                    className='color-picker'
                    value={colorPrimario}
                    style={{ backgroundColor: colorPrimario }}
                    onChange={(event) => {
                        actualizarColor(event.target.value, id);
                    }}
                />
                <h3 style={estiloTitulo}> {titulo} </h3>
                <div className='colaboradores'>
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;