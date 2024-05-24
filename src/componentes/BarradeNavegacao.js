import React from react;
import { Link } from 'react-router-dom';

const Navbar =()=>{
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/>register">Cadastro</Link></li>
                <li><Link to="/users-list">Usuário</Link></li>
                </ul>
                </nav>

    );
}
export default Navbar;