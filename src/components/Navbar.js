import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="carrosel">Carrosel</Link>
          </li>
          {/* <li>
            <Link to="usuarios/novo">Cadastrar Novo Usuarios</Link>
          </li> */}

          <li>
            <Link to="usuarios">Lista de Usuarios</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
export default Navbar;
