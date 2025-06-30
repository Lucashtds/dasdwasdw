import {Link} from "react-router-dom"
import {link} from "index.css"
export default function Menu(){
    return(
        <nav>
            <ul>
                <li><Link to="/">home</Link></li>
                 <li><Link to="/sobre">sobre</Link></li>
                 <li><Link to="/"Produtos></Link></li>
                 <li><Link to="/contato">contato</Link></li>
                  <li><Link to="/calculardesconto">calculardesconto</Link></li>
            </ul>
        </nav>
    )
}