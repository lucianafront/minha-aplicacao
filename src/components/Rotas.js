import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import DemoCarousel from "./DemoCarousel";
import CadastroUsuario from "./CadastroUsuario";
import NotFound from "./NotFound";
import Usuarios from "./Usuarios";

const Rotas = ()=> {
    return (
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="carrosel" element={<DemoCarousel />} />
          <Route path="usuarios" element={<Usuarios />} />
          {/* <Route path="usuarios/novo" element={<CadastroUsuario />} /> */}
          <Route path="*" element={<NotFound />} />
      </Routes>
    );
}

export default Rotas;