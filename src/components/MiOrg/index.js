import './MiOrg.css'

const MiOrg = (props) => {
    return <section className='orgSection'>
        <button className='btn' onClick={props.cambiarMostrar}>
            {props.texto}
        </button>
    </section>
}

export default MiOrg;