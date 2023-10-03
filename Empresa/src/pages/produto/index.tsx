import {Link} from 'react-router-dom'

export function Produto(){
    return(
        <div>
            <h1>Bem vindo a página Produto!</h1>
            <br />
            <Link to="/">Home</Link>
            <br />  
            <Link to="/contato">Contato</Link>
            <br />
            <Link to="/sobre">Sobre</Link>
        </div> 
    )
}