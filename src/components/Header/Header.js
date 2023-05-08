import "./Header.css"

function Header() {
    return <header className="header">
        <nav className="navigation">
            <img src="../img/Logo.png" alt="logo-org"></img>
            <ul>
                <li>
                    <p>Organiza tu Equipo de Trabajo</p>
                </li>
            </ul>
        </nav>
    </header>;
}

export default Header;