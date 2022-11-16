import logo from '../../assets/img/logo.svg';

import './style.css';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Logo DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://www.linkedin.com/in/jorge-sidney-1b9696238/" target="_blank">JorgeDev_®</a>
                    </p>
            </div>
        </header>
    )
}

export default Header;
