import './styles.css'
import logo from '../../assets/img/Logo.svg'
function Header() {

    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://https://wwws.linkedin.com/in/gustavo-gonçalves-pereira-084a63225">@GustavoPereira</a>
                </p>
            </div>
        </header>
    )
  }


export default Header