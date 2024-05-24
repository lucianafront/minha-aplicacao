import React from 'React';
import { Route, BrowserRouter } from "react-router-dom";
import BarradeNavegacao from './components/NavBar';
import Home from './pages/Home';
import Registro from './pages/Registro';
import ListadeUsuario from './pages/ListadeUsuario';

function App() {
    return (
        <BrowserRouter>
        <BarradeNavegacao />
            <Route component={Home} path="/" exact />
            <Route path="/" element={<Registro />} />
            <Route path="/users" element={<ListadeUsuario />} />

        </BrowserRouter>
    );
}

export default App;import { UseDispatch } from "react-redux";
import{addUser}from'../redux/users/usersSlice';