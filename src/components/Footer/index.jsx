import "./Footer.css";

const Footer = () => {
    return <footer className="footer">
        <div className="redes">
            <p>Redes</p>
            <a href='https://twitter.com/InSheloots'>
                <img src="/img/twitter.png" alt="twitter" />
            </a>
            <a href='https://www.instagram.com/dievelandia/'>
                <img src="/img/instagram.png" alt="instagram" />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' className="footer-logo" />
        <div className="redes">
            <p>Github</p>
            <a href="https://github.com/insheloots" className="creator">Desarrollado por <strong>Insheloots</strong></a>
        </div>

    </footer>
}

export default Footer;
