import { Link } from "react-router-dom"
import './menu.css'

const Menu = () => {

    return (
        <>

            <nav className="container-menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/jogo-de-cartas">Jogo de cartas</Link>
                    </li>
                  
                </ul>
            </nav>

        </>

    )
}

export default Menu