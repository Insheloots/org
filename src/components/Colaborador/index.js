import './Colaborador.css';
import { MdClose } from 'react-icons/md';

const Colaborador = (props) => {

    const { nombre, puesto, foto, id } = props.datos;
    const { colorPrimario, eliminarColaborador } = props;
    return <div className='colaborador'>
        <MdClose onClick={() => eliminarColaborador(id)} className='icon-close' />
        <div className='encabezado' style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className='info' >
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador;